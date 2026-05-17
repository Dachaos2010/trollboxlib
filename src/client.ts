import * as io from 'socket.io-client';
import pkg from 'he';
const { decode } = pkg;
import { AlreadyConnectedError } from './errors/alreadyconnected.js';
import { NotConnectedError } from './errors/notconnected.js';
import { NotJoinedError } from './errors/notjoined.js';
import { SocketMessage } from './structs/socketmessage.js';
import { SocketUser } from './structs/socketuser.js';
import { SocketMessageSchema } from './schemas/socketmessage.js';
import { SocketUserJoinedSchema } from './schemas/socketuserjoined.js';
import { SocketUpdatedUserSchema } from './schemas/socketupdateduser.js';
import { UsersManager } from './managers/usersmanager.js';
import { SocketUserLeftSchema } from './schemas/socketuserleft.js';
import { SocketUserNickChangeSchema } from './schemas/socketusernickchange.js';
import { SocketUserNickChange } from './structs/socketusernickchange.js';
import { HandlersManager } from './managers/handlersmanager.js';
import { SocketNick } from './structs/socketnick.js';
import { MessageContext } from './context/variants/messagecontext.js';
import { UserJoinedContext } from './context/variants/userjoinedcontext.js';
import { UserLeftContext } from './context/variants/userleftcontext.js';
import { UserNickChangeContext } from './context/variants/usernickchangecontext.js';
import { ConnectContext } from './context/variants/connectcontext.js';
import { DisconnectContext } from './context/variants/disconnectcontext.js';

const TROLLBOX_ENDPOINT = 'https://v2.windows93.net:8088';

/**
 * Represents a Trollbox client.
 * 
 * @class
 */
export class TrollboxClient {
    /**
     * Socket.IO of the client.
     * 
     * @type {SocketIOClient.Socket | null}
     */
    socket: SocketIOClient.Socket | null;

    /**
     * Have client joined the Trollbox?
     * 
     * @type {boolean}
     */
    joined: boolean;

    /**
     * Users manager.
     * 
     * @type {UsersManager}
     */
    users_manager: UsersManager = new UsersManager();

    /**
     * Handlers manager.
     * 
     * @type {HandlersManager}
     */
    handlers_manager: HandlersManager = new HandlersManager();

    /**
     * Your pseudo,
     * 
     * @type {string}
     */
    pseudo: string = 'anonymous';

    /**
     * Your color.
     * 
     * @type {string}
     */
    color: string = 'white';

    /**
     * Creates a Trollbox client instance.
     */
    constructor() {
        this.socket = null;
        this.joined = false;
    }

    /**
     * Checks if the client is connected to the Trollbox.
     * 
     * @returns {boolean}
     */
    is_connected(): boolean {
        if (!this.socket) return false;
        if (this.socket.disconnected) return false;

        return true;
    }

    /**
     * Checks if the client has joined the Trollbox.
     * 
     * @returns {boolean}
     */
    is_joined(): boolean {
        if (!this.is_connected()) return false;
        if (this.joined) return false;

        return true;
    }

    /**
     * Connect to the Trollbox server.
     * 
     * @throws {AlreadyConnectedError} If the client is already connected to the server.
     */
    connect() {
        if (this.is_connected()) throw new AlreadyConnectedError('Client is already connected');

        this.socket = io.default(TROLLBOX_ENDPOINT, {
            forceNew: true,
            transportOptions: {
                polling: {
                    extraHeaders: {
                        "Origin": "http://www.windows93.net",
                        "Referer": 'http://www.windows93.net/trollbox/index.php',
                    }
                }
            },
            transports: ['websocket'],
            upgrade: false
        });

        this.socket.on('message', async (data: string) => {
            let schema = SocketMessageSchema.safeParse(data);

            if (schema.success) {
                let struct = new SocketMessage(
                    this,
                    new SocketUser(
                        this,
                        new SocketNick(
                            this,
                            decode(schema.data.nick),
                            schema.data.color,
                            schema.data.style,
                        ),
                        schema.data.home
                    ),
                    decode(schema.data.msg)
                );

                await this.handlers_manager.call(
                    'MessageHandler',
                    new MessageContext(this, struct)
                );
            }
        });

        this.socket.on('user joined', async (data: any) => {
            let schema = SocketUserJoinedSchema.safeParse(data);

            if (schema.success) {
                let struct = new SocketUser(
                    this,
                    new SocketNick(
                        this,
                        decode(schema.data.nick),
                        schema.data.color,
                        schema.data.style,
                    ),
                    schema.data.home
                );

                await this.handlers_manager.call(
                    'UserJoinedHandler',
                    new UserJoinedContext(this, struct)
                );
            }
        });

        this.socket.on('user left', async (data: any) => {
            let schema = SocketUserLeftSchema.safeParse(data);

            if (schema.success) {
                let struct = new SocketUser(
                    this,
                    new SocketNick(
                        this,
                        decode(schema.data.nick),
                        schema.data.color,
                        schema.data.style,
                    ),
                    schema.data.home
                );

                await this.handlers_manager.call(
                    'UserLeftHandler',
                    new UserLeftContext(this, struct)
                );
            }
        });

        this.socket.on('user change nick', async (data: any) => {
            let schema = SocketUserNickChangeSchema.safeParse({
                0: data[0],
                1: data[1]
            });

            if (schema.success) {
                let struct = new SocketUserNickChange(
                    this,
                    new SocketNick(
                        this,
                        decode(schema.data[0].nick),
                        schema.data[0].color,
                        schema.data[0].style
                    ),
                    new SocketUser(
                        this,
                        new SocketNick(
                            this,
                            decode(schema.data[1].nick),
                            schema.data[1].color,
                            schema.data[1].style,
                        ),
                        schema.data[1].home
                    )
                );


                await this.handlers_manager.call(
                    'UserNickChangeHandler',
                    new UserNickChangeContext(this, struct)
                );
            }
        });

        this.socket.on('update users', async (data: any) => {
            this.users_manager.users = {};

            Object.entries(data).forEach(([socket_id, data]) => {
                let schema = SocketUpdatedUserSchema.safeParse(data);

                if (schema.success) {
                    this.users_manager.users[socket_id] = new SocketUser(
                        this,
                        new SocketNick(
                            this,
                            decode(schema.data.nick),
                            schema.data.color,
                            schema.data.style,
                        ),
                        schema.data.home
                    );
                }
            });

            const king_socket_id = Object.keys(data)[0];

            if (king_socket_id) {
                this.users_manager.king = this.users_manager.users[king_socket_id] ?? null
            }
        });

        this.socket.on('connect', async () => {
            await this.handlers_manager.call(
                'ConnectHandler',
                new ConnectContext(this)
            );
        });

        this.socket.on('disconnect', async () => {
            this.joined = false;

            await this.handlers_manager.call(
                'DisconnectHandler',
                new DisconnectContext(this)
            );
        });
    }

    /**
     * Disconnect from the Trollbox server.
     * 
     * @throws {NotConnectedError} If the client is already disconnected from the Trollbox.
     */
    disconnect() {
        if (!this.is_connected()) throw new NotConnectedError('Client is already disconnected');

        this.socket?.disconnect();
        this.joined = false;
    }

    /**
     * Join Trollbox. Calling this function again (without disconnecting) will change your pseudo and color.
     * 
     * @param {string} pseudo Pseudo (aka. nickname) of your client.
     * @param {string} color Color of the pseudo. Can be a named-color from CSS (`white`) or hex (`#FFFFFF`). Random color will be chosen if string is empty.
     * @param {string} style CSS style of pseudo.
     * @param {string} pass I dunno what is this.
     * 
     * @throws {NotConnectedError} If the client is not connected to the Trollbox.
     * 
     * @example
     * // join trollbox with 'amogus' pseudo and orange color
     * join('amogus', 'orange', '', '')
     * 
     * @example
     * // join trollbox with 'sus' pseudo and random color
     * join('sus', '', '', '')
     */
    join(pseudo: string, color: string, style: string, pass: string) {
        if (!this.is_connected()) throw new NotConnectedError('Client is not connected');

        this.socket?.emit('user joined', pseudo, color, style, pass, () => {
            console.log("hi");
        });
        this.joined = true;
        this.pseudo = pseudo;
        this.color = color;
    }

    /**
     * Send a message.
     * 
     * @param {string} message Content of the message.
     * 
     * @throws {NotConnectedError} If the client is not connected to the Trollbox.
     * @throws {NotJoinedError} If the client have not joined the Trollbox.
     * 
     * @example
     * // send a message with content `hello`
     * send_message('hello')
     */
    send_message(message: string) {
        if (!this.is_connected()) throw new NotConnectedError('Client is not connected');
        if (!this.is_joined()) throw new NotJoinedError('Client have not joined');

        this.socket?.emit('message', message);
    }
}