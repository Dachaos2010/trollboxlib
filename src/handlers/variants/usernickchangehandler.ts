import type { Handler } from '../handler.js';
import type { Callback } from '../callback.js';
import type { UserNickChangeContext } from '../../context/variants/usernickchangecontext.js';

/**
 * Represents a user nick change handler. Called when someone changes a nickname.
 * 
 * @class
 */
export class UserNickChangeHandler implements Handler<UserNickChangeContext> {
    name = 'UserNickChangeHandler';
    
    callback: Callback<UserNickChangeContext>;
    
    /**
     * Create a user nick change instance.
     * 
     * @param {Callback} callback Callback function.
     */
    constructor(callback: Callback<UserNickChangeContext>) {
        this.callback = callback;
    }
}