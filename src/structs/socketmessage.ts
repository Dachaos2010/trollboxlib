import type { TrollboxClient } from '../client.js';
import type { SocketUser } from './socketuser.js';

/**
 * Represents a message recieved from socket.
 */
export class SocketMessage {
    /**
     * The client where this was recieved from.
     * 
     * @type {TrollboxClient}
     */
    client: TrollboxClient;

    /**
     * Author of the message.
     * 
     * @type {SocketUser}
     */
    author: SocketUser;

    /**
     * Content of the message.
     * 
     * @type {string}
     */
    msg: string;

    /**
     * When the message was sent?
     * 
     * @type {Date}
     */
    sent: Date;

    constructor(client: TrollboxClient, author: SocketUser, msg: string, sent: Date) {
        this.client = client;
        this.author = author;
        this.msg = msg;
        this.sent = sent;
    }
}