import type { Handler } from '../handler.js';
import type { Callback } from '../callback.js';

/**
 * Represents a user joined handler. Called when someone joins Trollbox.
 * 
 * Context: `client` `user`
 * 
 * @class
 */
export class UserJoinedHandler implements Handler {
    name = 'UserJoinedHandler';
    
    callback: Callback;
    
    /**
     * Create a user joined handler instance.
     * 
     * @param {Callback} callback Callback function.
     */
    constructor(callback: Callback) {
        this.callback = callback;
    }
}