import type { TrollboxClient } from '../../client.js';
import type { SocketUser } from '../../structs/socketuser.js';
import { Context } from '../context.js';

/**
 * Represents a user left handler execution context.
 * 
 * @class
 */
export class UserLeftContext extends Context {
    /**
     * User left.
     */
    user: SocketUser;

    /**
     * Creates a new instance.
     */
    constructor(client: TrollboxClient, user: SocketUser) {
        super(client);
        this.user = user;
    }
}