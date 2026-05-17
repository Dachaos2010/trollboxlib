import type { Callback, Handler } from '../handler.js';

/**
 * Represents a user nick change handler. Called when someone changes a nickname.
 * 
 * Context: `client` `user_nick_change`
 * 
 * @class
 */
export class UserNickChangeHandler implements Handler {
    name = 'UserNickChangeHandler';
    
    callback: Callback;
    
    /**
     * Create a user nick change instance.
     * 
     * @param {Callback} callback Callback function.
     */
    constructor(callback: Callback) {
        this.callback = callback;
    }
}