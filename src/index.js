import dotenv from "dotenv";
import { Telegraf } from "telegraf";
import getTime from "./getTime.js";

dotenv.config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_KEY);

bot.start((ctx) => ctx.reply(`Hello I'm Vox Clock ,just send \\time and I will replay with audio contain talking clock`));
bot.hears('/time',(ctx) => {
    const time = getTime();
    ctx.reply(`${time.hour} : ${time.minutes} ${time.amPm}`)
})

bot.launch(() => {
    console.log("bot is running");
});