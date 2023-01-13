import DiscordJS, { ActionRowBuilder, ButtonBuilder,  ButtonStyle, ActivityFlags, SlashCommandBuilder,  GatewayIntentBits, EmbedBuilder, PermissionsBitField } from 'discord.js'
import { color } from '../settings/settings'

export default async function Slash_Help(interaction: any)  {

    let Embed = new EmbedBuilder()
    .setColor(color.blue)
    .setTitle('Bot commands!')
    .setDescription(
        '**/add-test** - Add test to test list.\n' + 
        '**/show-all-tests** - Write list of tests.\n'
    )
    .setTimestamp()

    interaction.reply({  embeds: [Embed] })
}