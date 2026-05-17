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
     * @returns {boolean}
     */
    is_me(): boolean {
        if (!this.client.socket) return false;

        return this.client.users_manager.socket_id_by_user(this) == this.client.socket?.id
    }

    /**
     * Checks if the user is a king (first user in the users list).
     * 
     * @returns {boolean}
     */
    is_king(): boolean {
        if (!this.client.users_manager.king) return false;

        return this.client.users_manager.socket_id_by_user(this.client.users_manager.king) == this.client.socket?.id
    }
}