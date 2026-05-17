import type { TrollboxClient } from '../../client.js';
import type { SocketMessage } from '../../structs/socketmessage.js';
import { Context } from '../context.js';

/**
 * Represents a message handler execution context.
 * 
 * @class
 */
export class MessageContext extends Context {
    message: SocketMessage;

    /**
     * Creates a new instance.
     */
    constructor(client: TrollboxClient, message: SocketMessage) {
        super(client);
        this.message = message;
    }
}