import DiscordJS, { ActionRowBuilder, ButtonBuilder,  ButtonStyle, ActivityFlags, SlashCommandBuilder,  GatewayIntentBits, EmbedBuilder, PermissionsBitField, Interaction, Options, CommandInteraction } from 'discord.js'
import { AddTestToDataBase } from '../MongoDataBase';
import { color, ITest } from '../settings/settings';

export default async function Slash_AddTest(interaction: any, options: any)  {
    const testSubject: string = options.getString('test-subject')
    const testDate   : string = options.getString('test-date')
    const testTopic  : string = options.getString('test-topic')
    const testLinks  : string = options.getString('test-links')


    let test: ITest = {
        test_subject: testSubject,
        test_date: testDate,
        test_topic: testTopic,
        test_links: testLinks,
        created_by_id: interaction.user.id,
        created_by_name: interaction.user.username,
    }

    AddTestToDataBase(test)

    // update(ref(db, 'database'), {
    //     [ID]: obj,
    // })
    
    let Embed = new EmbedBuilder()
    .setColor(color.blue)
    .setTitle('Test-reminder successfully created!')
    .setTimestamp()
    interaction.reply({  embeds: [Embed] })
}