import type { Context } from './context.js';

/**
 * Represents a callback function type.
 */
export type Callback = (context: Context) => Promise<void>;

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