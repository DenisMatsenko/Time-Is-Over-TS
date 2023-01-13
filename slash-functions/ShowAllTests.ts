import DiscordJS, { ActionRowBuilder, ButtonBuilder,  ButtonStyle, ActivityFlags, SlashCommandBuilder,  GatewayIntentBits, EmbedBuilder, PermissionsBitField, Embed } from 'discord.js'
import { GetAllRemindersFromDataBase } from '../MongoDataBase'
import { color, IReminder } from '../settings/settings'


export default async function Slash_ShowAllreminders(interaction: any)  {
    let Embed = new EmbedBuilder()
    .setColor(color.blue)
    .setTitle(`All reminders:`)
    interaction.reply({  embeds: [Embed] })

    const notifies = await GetAllRemindersFromDataBase()

    notifies.forEach(reminder => {
            let Embed = new EmbedBuilder()
            .setTitle(`${reminder.reminder_date} - ${reminder.reminder_subject}`)
            .setDescription(`${reminder.reminder_topic}. Created by <@${reminder.created_by_id}>`)
            
            interaction.channel.send({  embeds: [Embed] })
    });
}