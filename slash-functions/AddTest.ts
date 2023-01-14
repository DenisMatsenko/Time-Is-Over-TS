import DiscordJS, { ActionRowBuilder, ButtonBuilder,  ButtonStyle, ActivityFlags, SlashCommandBuilder,  GatewayIntentBits, EmbedBuilder, PermissionsBitField, Interaction, Options, CommandInteraction } from 'discord.js'
import { AddReminderToDataBase } from '../MongoDataBase';
import { color, IReminder } from '../settings/settings';

export default async function Slash_AddReminder(interaction: any, options: any)  {
    const reminderSubject: string = options.getString('reminder-subject')
    const reminderDate   : string = options.getString('reminder-date')
    const reminderTopic  : string = options.getString('reminder-topic')
    const reminderLinks  : string = options.getString('reminder-links')
    const reminderGroup  : string = options.getString('reminder-group')
    const reminderType  : string = options.getString('reminder-type')


    let reminder: IReminder = {
        reminder_type: reminderType, 
        reminder_subject: reminderSubject,
        reminder_group: reminderGroup,
        reminder_date: reminderDate,
        reminder_topic: reminderTopic,
        reminder_links: reminderLinks,
        created_by_id: interaction.user.id,
        created_by_name: interaction.user.username,
    }

    AddReminderToDataBase(reminder)

    // update(ref(db, 'database'), {
    //     [ID]: obj,
    // })
    
    let Embed = new EmbedBuilder()
    .setColor(color.blue)
    .setTitle('Reminder successfully created!')
    .setTimestamp()
    interaction.reply({  embeds: [Embed] })
}