import type { TrollboxClient } from '../../client.js';
import type { SocketUserNickChange } from '../../structs/socketusernickchange.js';
import { Context } from '../context.js';

/**
 * Represents a user nick change handler execution context.
 * 
 * @class
 */
export class UserNickChangeContext extends Context {
    /**
     * User nick change.
     */
    user_nick_change: SocketUserNickChange;

    /**
     * Creates a new instance.
     */
    constructor(client: TrollboxClient, user_nick_change: SocketUserNickChange) {
        super(client);
        this.user_nick_change = user_nick_change;
    }
}