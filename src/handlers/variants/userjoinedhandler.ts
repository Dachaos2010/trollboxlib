import type { Handler } from '../handler.js';
import type { Callback } from '../callback.js';
import type { UserJoinedContext } from '../../context/variants/userjoinedcontext.js';

/**
 * Represents a user joined handler. Called when someone joins Trollbox.
 * 
 * @class
 */
export class UserJoinedHandler implements Handler<UserJoinedContext> {
    name = 'UserJoinedHandler';
    
    callback: Callback<UserJoinedContext>;
    
    /**
     * Create a user joined handler instance.
     * 
     * @param {Callback<UserJoinedHandler>} callback Callback function.
     */
    constructor(callback: Callback<UserJoinedContext>) {
        this.callback = callback;
    }
}