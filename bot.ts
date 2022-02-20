import dotenv from 'dotenv'
import DiscordJS, {Intents} from 'discord.js';
import WOKcommands from 'wokcommands'
import path from 'path';
import mongoose from 'mongoose'
dotenv.config();
const client = new DiscordJS.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})

client.on('ready', async () => {
    console.log('the bot is ready')
    const guildid = '944221227520778272'
    const guild = client.guilds.cache.get(guildid)
    let commands
    new WOKcommands(client,{
        commandDir: path.join(__dirname, 'commands'),
        featureDir: path.join(__dirname, 'features'),
        typeScript: true,
        testServers: '944221227520778272',
        mongoUri: process.env.MONGO_URI,
                
    })
})

client.login(process.env.TOKEN)
