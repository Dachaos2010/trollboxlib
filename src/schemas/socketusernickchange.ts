import * as z from 'zod';

export const SocketUserNickChangeSchema = z.object({
    0: z.object({
        nick: z.string(),
        color: z.string(),
        style: z.string(),
    }),
    1: z.object({
        nick: z.string(),
        color: z.string(),
        style: z.string(),
        home: z.hash('sha256'),
        room: z.string(),
        isBot: z.boolean()
    })
});