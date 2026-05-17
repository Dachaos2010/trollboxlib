import type { Context } from '../context/context.js';

/**
 * Represents a callback functional interface.
 */
export interface Callback<T extends Context> {
    (context: T): Promise<void>;
}