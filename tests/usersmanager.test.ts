import { describe, expect, test } from 'vitest';
import { TrollboxClient } from '../src/client.js';
import { SocketUser } from '../src/structs/socketuser';
import { SocketNick } from '../src/structs/socketnick';

describe('users manager', () => {
    const client: TrollboxClient = new TrollboxClient();

    client.users_manager.users["some_socket_id"] = new SocketUser(
        client,
        new SocketNick(
            client,
            "Grethy",
            "white",
            ""
        ),
        "blahblahblah"
    );
    client.users_manager.users["ABCDEFGHI"] = new SocketUser(
        client,
        new SocketNick(
            client,
            "NotGrethy",
            "purple",
            ""
        ),
        "blahblahblahblahblah"
    );
    client.users_manager.users["5334118"] = new SocketUser( // OoOoOo pinewood computer core first code? yep.
        client,
        new SocketNick(
            client,
            "ageverificationisstupid",
            "yellow",
            ""
        ),
        "blahblahblahblahblahblahblah"
    );

    client.users_manager.users["6445229"] = new SocketUser( // secondary code
        client,
        new SocketNick(
            client,
            "persona is leaking your info btw",
            "lime",
            ""
        ),
        "blahblahblahblahblahblahblah" // same home
    );

    // bruh no third code D:

    test('must correctly get user by home', () => {
        expect(
            client.users_manager.by_home("blahblahblahblahblahblahblah")
        ).toBeOneOf(
            [
                client.users_manager.users["5334118"],
                client.users_manager.users["6445229"]
            ]
        );
    });

    test('must correctly get user by socket id', () => {
        expect(
            client.users_manager.by_socket_id("ABCDEFGHI")
        ).toBe(
            client.users_manager.users["ABCDEFGHI"]
        );

        expect(
            client.users_manager.by_socket_id("some_socket_id")
        ).toBe(
            client.users_manager.users["some_socket_id"]
        );

        expect(
            client.users_manager.by_socket_id("5334118")
        ).toBe(
            client.users_manager.users["5334118"]
        );
    });

    test('must correctly get socket id by user', () => {
        expect(
            client.users_manager.socket_id_by_user(client.users_manager.users["some_socket_id"])
        ).toBe("some_socket_id");
    });

    test('must correctly get multiple users by home', () => {
        expect(
            client.users_manager.by_home_multiple("blahblahblahblahblahblahblah")
        ).toStrictEqual(
            [
                client.users_manager.users["5334118"],
                client.users_manager.users["6445229"]
            ]
        );
    });
});