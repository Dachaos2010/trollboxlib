import type { Handler } from '../handler.js';
import type { Callback } from '../callback.js';
import type { MessageContext } from '../../context/variants/messagecontext.js';

/**
 * Represents a message handler. Called when someone sends a message.
 * 
 * Context: `client` `message`
 * 
 * @class
 */
export class MessageHandler implements Handler<MessageContext> {
    name = 'MessageHandler';

    callback: Callback<MessageContext>;
    
    /**
     * Create a message handler instance.
     * 
     * @param {Callback<MessageContext>} callback Callback function.
     */
    constructor(callback: Callback<MessageContext>) {
        this.callback = callback;
    }
}