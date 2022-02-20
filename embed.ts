import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default{
    category: 'testing',
    description: 'sends an embed',
    testOnly: true,

    Permissions: ['ADMINISTRATOR'],

    callback: async ({message, text}) => {
        const json = JSON.parse(text)
        const embed = new MessageEmbed(json)

        return embed
        /*const embed = new MessageEmbed()
            .setDescription("hello world")
            .setTitle('title')
            .setColor('RED')
            .setAuthor('hamza')
            .setFooter('footer')
            .addFields([{

                name: 'name',
                value: 'value',
                inline: true,
            },
            {
                name: 'name2',
                value: 'value2',
                inline: true,
            }
            ])
            .addField('name three', 'value three')

        const newMessage = await message.reply({
            embeds: [embed]
        })
        await new Promise((resolve,) =>setTimeout(resolve, 5000))
        const newEmbed = newMessage.embeds[0]
        newEmbed.setTitle('edited title')

        newMessage.edit({
            embeds: [newEmbed],
        })*/

    }
} as ICommand