import type { Handler } from '../handler.js';
import type { Callback } from '../callback.js';

/**
 * Represents a disconnect handler. Called when client disconnects.
 * 
 * Context: `client`
 * 
 * @class
 */
export class DisconnectHandler implements Handler {
    name = 'DisconnectHandler';
    
    callback: Callback;
    
    /**
     * Create a disconnect handler instance.
     * 
     * @param {Callback} callback Callback function.
     */
    constructor(callback: Callback) {
        this.callback = callback;
    }
}