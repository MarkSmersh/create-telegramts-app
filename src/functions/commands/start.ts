import { Telegram, Message } from "@marksmersh/telegramts"

export default async function start (c: Telegram, e: Message) {
    await c.request("sendMessage", { chat_id: e.chat.id, text: "Hello world?" });

    return "input";
}