import type { TrollboxClient } from '../../client.js';
import { Context } from '../context.js';

/**
 * Represents a connect handler execution context.
 * 
 * @class
 */
export class ConnectContext extends Context {
    /**
     * Creates a new instance.
     */
    constructor(client: TrollboxClient) {
        super(client);
    }
}