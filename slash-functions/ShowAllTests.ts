import DiscordJS, { ActionRowBuilder, ButtonBuilder,  ButtonStyle, ActivityFlags, SlashCommandBuilder,  GatewayIntentBits, EmbedBuilder, PermissionsBitField, Embed } from 'discord.js'
import { GetAllRemindersFromDataBase } from '../MongoDataBase'
import { color, dayOfWeek, IReminder } from '../settings/settings'


export default async function Slash_ShowAllreminders(interaction: any)  {
    let Embed = new EmbedBuilder()
    .setColor(color.white)
    .setTitle(`All reminders:`)
    interaction.reply({  embeds: [Embed] })

    const notifies = await GetAllRemindersFromDataBase()
    
    //sort by date
    notifies.sort((a, b) => parseFloat(a.reminder_date.split('.')[0]) - parseFloat(b.reminder_date.split('.')[0]))

    //send all reminders to chat
    notifies.forEach(reminder => {
            let Embed = new EmbedBuilder()
            .setColor(GetColor(reminder))
            .setTitle(`${reminder.reminder_subject} - ${GetDayOfWeek(reminder)} ( ${reminder.reminder_date} )  G- ${reminder.reminder_group}`)
            .setDescription(`${reminder.reminder_topic}. \n\nCreated by <@${reminder.created_by_id}>`)
            
            interaction.channel.send({  embeds: [Embed] })
    });
}

const GetColor = (reminder: IReminder) => {
    switch (reminder.reminder_type) {
        case "Test":
            return color.red
        case "Homework":
            return color.orange
        case "Action":
            return color.green
    }
    return null
}

const GetDayOfWeek = (reminder: IReminder) => {
    return dayOfWeek[new Date(`${new Date().getFullYear()}-${reminder.reminder_date.split('.')[1]}-${reminder.reminder_date.split('.')[0]}`).getDay()]
}