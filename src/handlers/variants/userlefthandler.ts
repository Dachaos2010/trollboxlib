import type { Callback, Handler } from '../handler.js';

/**
 * Represents a user left handler. Called when someone quits Trollbox.
 * 
 * Context: `client` `user`
 * 
 * @class
 */
export class UserLeftHandler implements Handler {
    name = 'UserLeftHandler';
    
    callback: Callback;
    
    /**
     * Create a user left handler instance.
     * 
     * @param {Callback} callback Callback function.
     */
    constructor(callback: Callback) {
        this.callback = callback;
    }
}