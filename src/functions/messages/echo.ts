import { Telegram, Message } from "@marksmersh/telegramts"

export default async function echo (c: Telegram, e: Message) {
    await c.request("sendMessage", { chat_id: e.chat.id, text: e.text });
}