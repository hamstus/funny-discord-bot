import {Client, TextChannel} from "discord.js"
import welcomeSchemas from "../models/welcome-schemas"

// load and store only when needed 

const WelcomeData = {} as {
    // guildID: [channel, message]
    [key: string]: [TextChannel, string]
}

export default (client: Client) =>{
    client.on('guildMemberAdd', async member =>{
        const {guild, id } = member

        let data = WelcomeData[guild.id]

        if (!data){
            const results = await welcomeSchemas.findById(guild.id)
            if (!results){
                return
            }
            const { channelID, text} = results
            const channel = guild.channels.cache.get(channelID) as TextChannel
            data = WelcomeData[guild.id] = [channel, text]
        }

        data[0].send({
            content: data[1].replace(/@/g, `<@${id}>`)
        })

    })
}

export const config = {
    displayName: 'Welcome channel',
    dbName: 'WELCOME_CHANNEL'
}