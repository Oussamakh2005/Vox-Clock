import dotenv from "dotenv";
import { Telegraf } from "telegraf";
import getTime from "./getTime.js";
import createMessage from "./createMessage.js";

dotenv.config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_KEY);

bot.start((ctx) => ctx.reply(`Hello I'm Vox Clock ,just send \\time and I will replay with audio contain talking clock`));
bot.hears('/time',(ctx) => {
    const timeText = createMessage(getTime());
    ctx.reply(timeText);
})

bot.launch(() => {
    console.log("bot is running");
});