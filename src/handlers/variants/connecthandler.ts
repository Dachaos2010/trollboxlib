import type { Callback, Handler } from '../handler.js';

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
     * @param callback Callback function.
     */
    constructor(callback: Callback) {
        this.callback = callback;
    }
}