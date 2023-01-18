import { Client, EmbedBuilder } from 'discord.js'
import { AddReminderToDataBase } from '../MongoDataBase';
import { color, IReminder } from '../settings/settings';
import ClearChannel from '../sup-functions/ClearChannel';
import DelteteOldReminders from '../sup-functions/DeleteOldReminders';
import SendTestListToChannel from '../sup-functions/SendTestListToChannel';

export default async function Slash_AddReminder(client: Client, interaction: any, options: any)  {
    const reminderSubject   : string = options.getString('reminder-subject')
    const reminderDate      : string = options.getString('reminder-date')
    const reminderTopic     : string = options.getString('reminder-topic')
    const reminderLinks     : string = options.getString('reminder-links')
    const reminderGroup     : string = options.getString('reminder-group')
    const reminderType      : string = options.getString('reminder-type')

    //create new reminder obj
    const reminder: IReminder = {
        reminder_type: reminderType, 
        reminder_subject: reminderSubject,
        reminder_group: reminderGroup,
        reminder_date: reminderDate,
        reminder_topic: reminderTopic,
        reminder_links: reminderLinks,
        created_by_id: interaction.user.id,
        created_by_name: interaction.user.username,
    }

    AddReminderToDataBase(reminder).then(async () => {
        await ClearChannel(client)
        await DelteteOldReminders()
        await SendTestListToChannel(client)
    })
    
    let Embed = new EmbedBuilder()
    .setColor(color.blue)
    .setTitle('Reminder successfully created!')
    .setTimestamp()
    interaction.reply({  embeds: [Embed] })
}