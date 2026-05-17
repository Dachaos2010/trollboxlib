import type { SocketUser } from '../structs/socketuser.js';

/**
 * Represents a manager that stores users.
 */
export class UsersManager {
    /**
     * Dictionary of online users. The key is Socket ID.
     * 
     * @type {Record<string, SocketUser>}
     */
    users: Record<string, SocketUser> = {};

    /**
     * The king user (first user in the users list).
     * 
     * @type {SocketUser | null}
     */
    king: SocketUser | null = null;

    constructor() {}

    /**
     * Get user by it's home.
     * 
     * @param {string} home Home of the user to get.
     * @returns {SocketUser | null}
     */
    by_home(home: string): SocketUser | null {
        return Object.values(this.users).find((x: SocketUser) => x.home == home) ?? null;
    }

    /**
     * Get users by theirs home.
     * 
     * @param {string} home Home.
     * @returns {SocketUser[]}
     */
    by_home_multiple(home: string): SocketUser[] {
        let to_return: SocketUser[] = [];

        Object.values(this.users).forEach((user: SocketUser, _) => {
            if (user.home == home) to_return.push(user);
        })

        return to_return;
    }

    /**
     * Get user by it's socket id.
     * 
     * @param {string} socket_id Socket id of the user to get.
     * @returns {SocketUser | null}
     */
    by_socket_id(socket_id: string): SocketUser | null {
        const found_socket = Object.keys(this.users).find((x) => x == socket_id);

        if (!found_socket) return null;

        return this.users[found_socket] ?? null;
    }

    /**
     * Get socket ID by user.
     * 
     * @param {SocketUser} user User id.
     * @returns {string | null}
     */
    socket_id_by_user(user: SocketUser): string | null {
        return Object.keys(this.users).find((x) => this.by_socket_id(x) == user) ?? null;
    }

    /**
     * Get your own user.
     * 
     * @returns {SocketUser | null}
     */
    get_me(): SocketUser | null {
        return Object.values(this.users).find((x) => x.is_me()) ?? null;
    }
}