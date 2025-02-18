import dotenv from "dotenv";
import { Telegraf } from "telegraf";
import getTime from "./getTime.js";
import createMessage from "./createMessage.js";
import convertTextToSpeechAndSend from "./ElevenLabs.js";

dotenv.config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_KEY);

bot.start((ctx) => ctx.reply(`Hello I'm Vox Clock ,just send \/time and I will replay with audio contain talking clock
    or send \/textTime and I'll reply with time as text
    Note : the time that given from the bot is in GMT+1 time zone
    `));
bot.hears('/time',(ctx) => {
    const timeText = createMessage(getTime());
    convertTextToSpeechAndSend(timeText,ctx);
});
bot.hears('/textTime',(ctx) => {
    const timeText = createMessage(getTime());
    ctx.reply(timeText);
});

bot.launch();