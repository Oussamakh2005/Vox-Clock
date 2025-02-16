import { ElevenLabsClient } from "elevenlabs";
import fs from "fs";
import { v4 as uuidV4 } from "uuid";
import dotenv from "dotenv";
import path from 'path';

dotenv.config();

const client = new ElevenLabsClient({
    apiKey: process.env.ELEVEN_LABS_API_KEY,
});


const convertTextToSpeechAndSend = async (message,ctx) => {
    try {
        const fileName = `audio_${uuidV4()}.mp3`;
        const filePath = process.cwd()+'/'+fileName;
        const audioStream = await client.textToSpeech.convert((process.env.VOICE_ID || "JBFqnCBsd6RMkjVDRZzb"), {
            text: message,
            model_id: "eleven_multilingual_v2",
            output_format: "mp3_44100_128",
        });
        const chunks = [];
        for await (const chunk of audioStream) {
          chunks.push(chunk);
        }
        const audioBuffer = Buffer.concat(chunks);
        // Save the buffer as an MP3 file
        fs.writeFile(filePath, audioBuffer,() =>{});
        await ctx.replyWithAudio({source : fileName})
        fs.unlink(filePath,()=>{});
    } catch (err) {
        console.log(err);
        ctx.reply("something went wrong.");
    }
}
export default convertTextToSpeechAndSend;