import * as z from 'zod';

export const SocketMessageSchema = z.object({
    date: z.number()
        .int()
        .min(0)
        .transform((val) => new Date(val)),
    nick: z.string(),
    color: z.string(),
    style: z.string(),
    home: z.hash('sha256'),
    msg: z.string()
});