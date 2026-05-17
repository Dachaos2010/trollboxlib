import type { Handler } from '../handler.js';
import type { Callback } from '../callback.js';
import type { DisconnectContext } from '../../context/variants/disconnectcontext.js';

/**
 * Represents a disconnect handler. Called when client disconnects.
 * 
 * Context: `client`
 * 
 * @class
 */
export class DisconnectHandler implements Handler<DisconnectContext> {
    name = 'DisconnectHandler';
    
    callback: Callback<DisconnectContext>;
    
    /**
     * Create a disconnect handler instance.
     * 
     * @param {Callback<DisconnectContext>} callback Callback function.
     */
    constructor(callback: Callback<DisconnectContext>) {
        this.callback = callback;
    }
}