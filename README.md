# :robot: trollboxlib

`trollboxlib` - a simple library for creating bots in trollbox (a chatroom in [windows93](windows93.net)). you can consider it as a successor to [tb-bot](https://www.npmjs.com/package/tb-bot) by dell.

## :crystal_ball: features

* it is async
* handlers system
* that's all

## :warning: notice

**please do not use this library for malicious intents.** using it for writing normal bots is ok, but using it for spam bots is not ok. i hope you understand. you also can get banned from trollbox, but it's very unlikely.

## :question: faq
**Q: why there is no room support?**
A: because room system in trollbox is kinda broken, so i am not planning to add support for it. maybe i will add it in the future.

**Q: will you add support for rmtrollbox and trollbox++?**
A: it's unlikely cuz i am lazy.

## :page_facing_up: my nickname on trollbox is `Yanomium`

my home is `2f9bf726c8d3dd814dd518b27143ce8b2b2f6989c37de97fc014f024f85025c2`

## :money_with_wings: donate

all donations are appreciated. thank you for supporting the project!

**bitcoin:** `bitcoin:BC1QE4HD5WNKWKMF065PYTQMZ8P5NDDVDQD7UAHDVH?label=trollboxlib`
**monero:** `89ZT8KQrcRVU1e9JufrMbALA59Gz6ycncPHB9jSe2c95NXD9sLwjoNiPMjgJvh3tWzjQmkPS1kZYuTuvfFdnAH9oThv25oT`

## :books: libs used

* `zod` for data validation recieved from socket.
* `socket.io-client` for trollbox connection.
* `typescript`.
* `he` for decoding html.
* `vitest` for unit testing.

## example

this is an example of library usage. it creates a logger bot that prints all messages and events to console.

```
import {
    TrollboxClient,
    Context,
    MessageHandler,
    UserJoinedHandler,
    UserLeftHandler,
    UserNickChangeHandler,
    ConnectHandler,
    ConnectContext,
    MessageContext,
    UserLeftContext,
    UserJoinedContext,
    UserNickChangeContext
} from 'trollboxlib';

function main() {
    let client = new TrollboxClient();

    client.connect();

    client.handlers_manager.register_handler(
        new ConnectHandler(
            async (context: ConnectContext) => {
                client.join('loggerbot', 'white', '', '');
            }
        )
    );

    client.handlers_manager.register_handler(
        new MessageHandler(
            async (context: MessageContext) => {
                if (!context.message) return;

                console.log('[' + context.message.author.nick.pseudo + '] ' + context.message.msg);
            }
        )
    );

    client.handlers_manager.register_handler(
        new UserLeftHandler(
            async (context: UserLeftContext) => {
                if (!context.user) return;

                console.log(context.user.nick.pseudo + ' left teh   trollbox');
            }
        )
    );

    client.handlers_manager.register_handler(
        new UserJoinedHandler(
            async (context: UserJoinedContext) => {
                if (!context.user) return;

                console.log(context.user.nick.pseudo + ' joined teh trollbox');
            }
        )
    );

    client.handlers_manager.register_handler(
        new UserNickChangeHandler(
            async (context: UserNickChangeContext) => {
                if (!context.user_nick_change) return;

                console.log(context.user_nick_change.prev_nick.pseudo + ' is now known as ' + context.user_nick_change.new_user.nick.pseudo);
            }
        )
    );
}

main();
```