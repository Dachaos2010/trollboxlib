import type { TrollboxClient } from '../client.js';

/**
 * Represents a nick of a user recieved from socket.
 */
export class SocketNick {
    /**
     * The client where this was recieved from.
     * 
     * @type {TrollboxClient}
     */
    client: TrollboxClient;

    /**
     * Pseudo of the joined user.
     * 
     * @type {string}
     */
    pseudo: string;

    /**
     * Color of the joined user.
     * 
     * @type {string}
     */
    color: string;

    /**
     * Style of the joined user.
     * 
     * @type {string}
     */
    style: string;

    constructor(client: TrollboxClient, pseudo: string, color: string, style: string) {
        this.client = client;
        this.pseudo = pseudo;
        this.color = color;
        this.style = style;
    }
}