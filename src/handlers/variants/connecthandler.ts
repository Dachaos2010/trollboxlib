import type { Handler } from '../handler.js';
import type { Callback } from '../callback.js';

/**
 * Represents a connect handler. Called when client connects.
 * 
 * Context: `client`
 * 
 * @class
 */
export class ConnectHandler implements Handler {
    name = 'ConnectHandler';
    
    callback: Callback;
    
    /**
     * Create a connects handler instance.
     * 
     * @param {Callback} callback Callback function.
     */
    constructor(callback: Callback) {
        this.callback = callback;
    }
}