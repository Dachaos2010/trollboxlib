import type { Context } from './context.js';
import type { Callback } from './callback.js';

/**
 * Represents a base handler.
 * 
 * @class
 */
export interface Handler {
    /**
     * A name of the handler to differ them.
     * 
     * @type {string}
     */
    name: string;

    /**
     * A callback function.
     * 
     * @type {Callback}
     */
    callback: Callback
}