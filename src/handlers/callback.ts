import type { Context } from './context.js';

/**
 * Represents a callback functional interface.
 */
export interface Callback {
    (context: Context): Promise<void>;
}