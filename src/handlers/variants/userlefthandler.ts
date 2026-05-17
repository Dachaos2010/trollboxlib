import type { Handler } from '../handler.js';
import type { Callback } from '../callback.js';
import type { UserLeftContext } from '../../context/variants/userleftcontext.js';

/**
 * Represents a user left handler. Called when someone quits Trollbox.
 * 
 * @class
 */
export class UserLeftHandler implements Handler<UserLeftContext> {
    name = 'UserLeftHandler';
    
    callback: Callback<UserLeftContext>;
    
    /**
     * Create a user left handler instance.
     * 
     * @param {Callback<UserLeftContext>} callback Callback function.
     */
    constructor(callback: Callback<UserLeftContext>) {
        this.callback = callback;
    }
}