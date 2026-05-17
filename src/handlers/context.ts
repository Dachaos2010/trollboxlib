import type { TrollboxClient } from '../client.js';
import type { SocketMessage } from '../structs/socketmessage.js';
import type { SocketUser } from '../structs/socketuser.js';
import type { SocketUserNickChange } from '../structs/socketusernickchange.js';

/**
 * Represents a handler callback function execution context.
 * 
 * @class
 */
export class Context {
    message: SocketMessage | null = null;
    user: SocketUser | null = null;
    user_nick_change: SocketUserNickChange | null = null;
    client: TrollboxClient | null = null;

    /**
     * Creates a new context instance.
     */
    constructor() {}

    /**
     * Add a Trollbox client to context.
     * 
     * @param {TrollboxClient} client A client that will be added to context.
     * @returns {Context} The current instance.
     */
    with_client(client: TrollboxClient): Context { this.client = client; return this }

    /**
     * Add a message to context.
     * 
     * @param {SocketMessage} message A message that will be added to context.
     * @returns {Context} The current instance.
     */
    with_message(message: SocketMessage): Context { this.message = message; return this }

    /**
     * Add a user to context.
     * 
     * @param {SocketUser} user A user that will be added to context.
     * @returns {Context} The current instance.
     */
    with_user(user: SocketUser): Context { this.user = user; return this }

    /**
     * Add a user nick change to context.
     * 
     * @param {SocketUserNickChange} user_nick_change A bick change that will be added to context.
     * @returns {Context} The current instance.
     */
    with_user_nick_change(user_nick_change: SocketUserNickChange): Context { this.user_nick_change = user_nick_change; return this }
}