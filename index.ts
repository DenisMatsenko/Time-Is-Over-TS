import { Client, GatewayIntentBits, CommandInteraction } from 'discord.js'
import { token } from './settings/settings'
import Slash_AddReminder from './slash-functions/AddReminder'
import Slash_Help from './slash-functions/Help'
import AddCommandsToBot from './sup-functions/AddCommandsToBot'
import SendTestListToChannel from './sup-functions/SendTestListToChannel'

export const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMembers,
        

        GatewayIntentBits.GuildInvites,

        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.DirectMessageReactions
    ]
})


client.on('ready', (client) => {
    AddCommandsToBot(client)
    console.log('Time is over is ready!!!')
}) 

client.on('interactionCreate', async (i) => {
    const interaction = i as CommandInteraction
    const { commandName, options } = interaction

    if(commandName === "help")                  Slash_Help(interaction)
    if(commandName === "add-reminder")          Slash_AddReminder(client, interaction, options)
    if(commandName === "show-all-reminders")    SendTestListToChannel(client, interaction) //this command in sup-functions folder !!!
})

client.login(token)