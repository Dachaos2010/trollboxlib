import type { TrollboxClient } from '../../client.js';
import type { SocketUser } from '../../structs/socketuser.js';
import { Context } from '../context.js';

/**
 * Represents a user joined handler execution context.
 * 
 * @class
 */
export class UserJoinedContext extends Context {
    user: SocketUser;

    /**
     * Creates a new instance.
     */
    constructor(client: TrollboxClient, user: SocketUser) {
        super(client);
        this.user = user;
    }
}