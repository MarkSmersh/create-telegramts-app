import { Telegram, States } from "@marksmersh/telegramts"
import * as env from "dotenv"
import * as f from "./functions"

env.config({ path: __dirname + "/.env" });

const t = new Telegram({
    token: process.env.TOKEN as string,
    state: new States({
        "default": [
            {
                type: "command",
                data: "/start",
                function: f.start
            }
        ],
        "input": [
            {
                type: "message",
                data: "default",
                function: f.echo
            }
        ]
    })
})

t.on("start", (e) => {
    console.log(`${e.first_name} has started!`);
})

t.start();