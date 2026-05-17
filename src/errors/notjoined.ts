/**
 * Represents an error where client tries to do something while being not joined.
 * 
 * @class
 */
export class NotJoinedError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'NotJoinedError';
    }
}