import type { TrollboxClient } from '../client.js';

/**
 * Represents a base handler callback function execution context.
 * 
 * @class
 */
export class Context {
    client: TrollboxClient | null = null;

    /**
     * Creates a new instance.
     */
    constructor(client: TrollboxClient) {
        this.client = client;
    }
}