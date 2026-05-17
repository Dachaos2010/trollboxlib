import { describe, expect, test } from 'vitest';
import { TrollboxClient } from '../src/client.js';
import { NotConnectedError } from '../src/errors/notconnected.js';

describe('trollbox client', () => {
    test('must throw notconnectederror when sending message not connected', () => {
        const client = new TrollboxClient();
        
        expect(() => client.send_message('this should not succeed')).toThrow(NotConnectedError);
    });

    test('must throw notconnectederror when joining not connected', () => {
        const client = new TrollboxClient();
        
        expect(() => client.join('i can\'t join', 'white', '', '')).toThrow(NotConnectedError);
    });

    test('must throw notconnectederror when disconnecting not connected', () => {
        const client = new TrollboxClient();
        
        expect(() => client.disconnect()).toThrow(NotConnectedError);
    });
});