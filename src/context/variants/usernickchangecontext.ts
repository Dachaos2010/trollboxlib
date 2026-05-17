import type { TrollboxClient } from '../../client.js';
import type { SocketUserNickChange } from '../../structs/socketusernickchange.js';
import { Context } from '../context.js';

/**
 * Represents a user nick change handler execution context.
 * 
 * @class
 */
export class UserNickChangeContext extends Context {
    nick_change: SocketUserNickChange;

    /**
     * Creates a new instance.
     */
    constructor(client: TrollboxClient, nick_change: SocketUserNickChange) {
        super(client);
        this.nick_change = nick_change;
    }
}