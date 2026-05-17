import type { Handler } from '../handler.js';
import type { Callback } from '../callback.js';
import type { ConnectContext } from '../../context/variants/connectcontext.js';

/**
 * Represents a connect handler. Called when client connects.
 * 
 * Context: `client`
 * 
 * @class
 */
export class ConnectHandler implements Handler<ConnectContext> {
    name = 'ConnectHandler';
    
    callback: Callback<ConnectContext>;
    
    /**
     * Create a connects handler instance.
     * 
     * @param {Callback<ConnectContext>} callback Callback function.
     */
    constructor(callback: Callback<ConnectContext>) {
        this.callback = callback;
    }
}