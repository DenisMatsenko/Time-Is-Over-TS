import { EmbedBuilder } from 'discord.js'
import { color } from '../settings/settings'

export default async function Slash_Help(interaction: any)  {
    let Embed = new EmbedBuilder()
    .setColor(color.blue)
    .setTitle('Bot commands!')
    .setDescription(
        '**/add-reminder** - Add reminder to reminder list.\n' + 
        '**/show-all-reminders** - Write list of reminders to chat.\n'
    )
    .setTimestamp()

    interaction.reply({  embeds: [Embed] })
}