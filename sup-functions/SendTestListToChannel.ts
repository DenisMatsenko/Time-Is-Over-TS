import DiscordJS, { ActionRowBuilder, ButtonBuilder,  ButtonStyle, ActivityFlags, SlashCommandBuilder,  GatewayIntentBits, EmbedBuilder, PermissionsBitField, Client } from 'discord.js'

const Day = [
    "Today",
    "Tomorrow",
    "In 2 days",
    "In 3 days",
    "In 4 days",
    "In 5 days",
    "In 6 days",
]

export default async function SendTestListToChannel(client: Client)  {


    
            // //new
            // for (let i = 0; i <= 7; i++) {
            //     for (let y = 0; y < Object.keys(data).length; y++) {

            //         let testData = Object.entries(data)[y][1]

            //         if(parseInt(testData['test-date'].split('.')[0]) == new Date().getDate() + i) {
            //             let Embed = new EmbedBuilder()
            //             .setColor("#db2121")
            //             .setTitle(`${Day[i]} - ${testData['test-subject']}`)
            //             .setDescription(`${testData['test-topic']}. Created by <@${testData['created-by-id']}>`)
            //             //client.channels.cache.get('1006001494530736229').send({  embeds: [Embed] });
            //             client.guilds.cache.get(settings.ServerID).channels.cache.get(settings.ChannelID).send({ embeds: [Embed] })
            //         }
            //     }
            // }
            
}