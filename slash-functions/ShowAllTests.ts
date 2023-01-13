import DiscordJS, { ActionRowBuilder, ButtonBuilder,  ButtonStyle, ActivityFlags, SlashCommandBuilder,  GatewayIntentBits, EmbedBuilder, PermissionsBitField, Embed } from 'discord.js'
import { GetAllTestsFromDataBase } from '../MongoDataBase'
import { color, ITest } from '../settings/settings'


export default async function Slash_ShowAllTests(interaction: any)  {
    let Embed = new EmbedBuilder()
    .setColor(color.blue)
    .setTitle(`All tests:`)
    interaction.reply({  embeds: [Embed] })

    const notifies = await GetAllTestsFromDataBase()

    notifies.forEach(test => {
            let Embed = new EmbedBuilder()
            .setTitle(`${test.test_date} - ${test.test_subject}`)
            .setDescription(`${test.test_topic}. Created by <@${test.created_by_id}>`)
            
            interaction.channel.send({  embeds: [Embed] })
    });
}