import type { Handler } from '../handler.js';
import type { Callback } from '../callback.js';

/**
 * Represents a message handler. Called when someone sends a message.
 * 
 * Context: `client` `message`
 * 
 * @class
 */
export class MessageHandler implements Handler {
    name = 'MessageHandler';

    callback: Callback;
    
    /**
     * Create a message handler instance.
     * 
     * @param {Callback} callback Callback function.
     */
    constructor(callback: Callback) {
        this.callback = callback;
    }
}