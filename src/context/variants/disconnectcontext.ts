import type { TrollboxClient } from '../../client.js';
import { Context } from '../context.js';

/**
 * Represents a disconnect handler execution context.
 * 
 * @class
 */
export class DisconnectContext extends Context {
    /**
     * Creates a new instance.
     */
    constructor(client: TrollboxClient) {
        super(client);
    }
}