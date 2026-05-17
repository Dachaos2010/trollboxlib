import type { TrollboxClient } from '../client.js';
import { NotConnectedError } from '../errors/notconnected.js';
import { NotJoinedError } from '../errors/notjoined.js';
import type { SocketNick } from './socketnick.js';

/**
 * Represents a user recieved from socket.
 */
export class SocketUser {
    /**
     * The client where this was recieved from.
     * 
     * @type {TrollboxClient}
     */
    client: TrollboxClient;

    /**
     * Nick of the joined user.
     * 
     * @type {SocketNick}
     */
    nick: SocketNick;

    /**
     * Home of the joined user.
     * 
     * @type {string}
     */
    home: string;

    constructor(client: TrollboxClient, nick: SocketNick, home: string) {
        this.client = client;
        this.nick = nick;
        this.home = home;
    }

    /**
     * Checks if the user is you.
     * 
     * @throws {NotConnectedError} If the client is not connected to the Trollbox.
     * @throws {NotJoinedError} If the client have not joined the Trollbox.
     * 
     * @returns {boolean}
     */
    is_me(): boolean {
        if (!this.client.is_connected()) throw new NotConnectedError('Client is not connected');
        if (!this.client.is_joined()) throw new NotJoinedError('Client have not joined');

        return this.client.socket?.id == this.client.users_manager.socket_id_by_user(this)
    }

    /**
     * Checks if the user is a king (first user in the users list).
     * 
     * @throws {NotConnectedError} If the client is not connected to the Trollbox.
     * @throws {NotJoinedError} If the client have not joined the Trollbox.
     * 
     * @returns {boolean}
     */
    is_king(): boolean {
        if (!this.client.is_connected()) throw new NotConnectedError('Client is not connected');
        if (!this.client.is_joined()) throw new NotJoinedError('Client have not joined');

        return this.client.users_manager.king == this
    }
}