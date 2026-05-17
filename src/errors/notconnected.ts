/**
 * Represents an error where client tries to do something while being disconnected.
 * 
 * @class
 */
export class NotConnectedError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'NotConnectedError';
    }
}