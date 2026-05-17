/**
 * Represents an error where client tries to connect to Trollbox with active connection.
 * 
 * @class
 */
export class AlreadyConnectedError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'AlreadyConnectedError';
    }
}