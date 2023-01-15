import { EmbedBuilder, Client, TextChannel, CommandInteraction } from 'discord.js'
import { GetAllRemindersFromDataBase } from '../MongoDataBase'
import { channelID, color, dayOfWeek, IReminder } from '../settings/settings'

export default async function SendTestListToChannel(client: Client, interaction?: CommandInteraction)  {

    //send title of list
    let Embed = new EmbedBuilder()
    .setColor(color.white)
    .setTitle(`All reminders:`)
    interaction != null ? interaction.reply({  embeds: [Embed] }) : GetDefaultChannel(client).send({  embeds: [Embed] })

    //get reminders list
    const reminders = await GetAllRemindersFromDataBase()
    
    //sort reminders list by date
    reminders.sort((a, b) => parseFloat(a.reminder_date.split('.')[0]) - parseFloat(b.reminder_date.split('.')[0]))

    //send all reminders to chat
    reminders.forEach(reminder => {
            let Embed = new EmbedBuilder()
            .setColor(GetColor(reminder))
            .setTitle(`${reminder.reminder_subject} - ${GetDayOfWeek(reminder)} ( ${reminder.reminder_date} )  G- ${reminder.reminder_group}`)
            .setDescription(`${reminder.reminder_topic}. \n\nCreated by <@${reminder.created_by_id}>`)
            interaction != null ? interaction.channel?.send({  embeds: [Embed] }) : GetDefaultChannel(client).send({  embeds: [Embed] })     
    })
}

const GetColor = (reminder: IReminder) => {
    if(reminder.reminder_type === "Test") return        color.red
    if(reminder.reminder_type === "Homework") return    color.orange
    if(reminder.reminder_type === "Action") return      color.green
    return null
}

const GetDayOfWeek = (reminder: IReminder) =>
    dayOfWeek[new Date(`${new Date().getFullYear()}-${reminder.reminder_date.split('.')[1]}-${reminder.reminder_date.split('.')[0]}`).getDay()]


const GetDefaultChannel = (client: Client) => 
    client.channels.cache.get(channelID) as TextChannel