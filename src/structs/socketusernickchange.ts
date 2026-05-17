import type { TrollboxClient } from '../client.js';
import type { SocketNick } from './socketnick.js';
import type { SocketUser } from './socketuser.js';

/**
 * Represents a nick change of user from socket.
 */
export class SocketUserNickChange {
    /**
     * The client where this was recieved from.
     * 
     * @type {TrollboxClient}
     */
    client: TrollboxClient;

    /**
     * Previous nick.
     * 
     * @type {SocketNick}
     */
    prev_nick: SocketNick;

    /**
     * New user.
     * 
     * @type {SocketUser}
     */
    new_user: SocketUser;

    constructor(client: TrollboxClient, prev_nick: SocketNick, new_user: SocketUser) {
        this.client = client;
        this.prev_nick = prev_nick;
        this.new_user = new_user;
    }
}