import type { Context } from '../context/context.js';
import type { Callback } from './callback.js';

/**
 * Represents a base handler.
 * 
 * @class
 */
export interface Handler<T extends Context> {
    /**
     * A name of the handler to differ them.
     * 
     * @type {string}
     */
    name: string;

    /**
     * A callback function.
     * 
     * @type {Callback<T>}
     */
    callback: Callback<T>
}