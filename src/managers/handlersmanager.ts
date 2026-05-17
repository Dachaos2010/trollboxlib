import { Context } from '../context/context.js';
import type { Handler } from '../handlers/handler.js';

/**
 * Represents a manager that stores handlers.
 */
export class HandlersManager {
    /**
     * Array of handlers.
     * 
     * @type {Handler<Context>[]}
     */
    handlers: Handler<Context>[] = [];

    constructor() {}

    /**
     * Register a handler.
     * 
     * @param {Handler} handler Handler to register.
     */
    register_handler(handler: Handler<Context>) {
        this.handlers.push(handler);
    }

    /**
     * Call handlers by name.
     * 
     * @param {string} name Handler name.
     * @param {Context} context Execution context.
     */
    async call(name: string, context: Context) {
        this.handlers.forEach(async (handler: Handler<Context>) => {
            if (handler.name == name) await handler.callback(context);
        });
    }
}