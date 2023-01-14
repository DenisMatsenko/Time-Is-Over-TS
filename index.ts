import DiscordJS, { ActivityFlags, SlashCommandBuilder, InteractionType ,  GatewayIntentBits, EmbedBuilder, PermissionsBitField, MessageActivityType, CommandInteraction  } from 'discord.js'
import { guildID, token } from './settings/settings'
import Slash_AddReminder from './slash-functions/AddTest'
import Slash_AddTest from './slash-functions/AddTest'
import Slash_Help from './slash-functions/Help'
import Slash_ShowAllreminders from './slash-functions/ShowAllTests'
import Slash_ShowAllTests from './slash-functions/ShowAllTests'
import AddCommandsToBot from './sup-functions/AddCommandsToBot'
import StartNotifyTimeChecker from './sup-functions/StartNotifyTimeChecker'

// import BotTurnedOnMsg from './functions/sup-functions/BotTurnedOnMsg.js'
// import SlashHelp from './functions/slash/slash-help.js'
// import CommOnlyServsWarning from './functions/sup-functions/CommOnlyOnServsWarning.js'
// import CommandList from './functions/sup-functions/SlashCommandsList.js'


// import {db} from "./firebase.js"
// import {set, ref, onValue, remove, update, increment, forceWebSockets} from "firebase/database"
// import SlashAddTest from './functions/slash/slash-add-test.js'
// import SlashShowAllTests from './functions/slash/slash-show-all-tests.js'
// import NotifyTimerStart from './functions/sup-functions/TimeToSendNotifStart.js'
// import SendTestListToChannel from './functions/sup-functions/SendTestListToChammel.js'
// import GetTokenimport from './functions/sup-functions/Token.js'
// import DeleteOldTests from './functions/sup-functions/DeleteOldTests.js'
// import { runDB } from './mongo.js'

////////
//доробити хелп, 


const client = new DiscordJS.Client({
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
    //AddCommandsToBot(client.application?.commands)
    AddCommandsToBot(client)
    StartNotifyTimeChecker(client)

    console.log('Time is over is ready!!!')


    //client.application.commands.set([])


        // client.application.commands
        // .then( (command) => {
        // console.log(`Fetched command ${command.name}`)
        // // further delete it like so:
        // command.delete()
        // console.log(`Deleted command ${command.name}`)
        // }).catch(console.error);
}) 

client.on('interactionCreate', async (interaction) => {
    let { commandName, options } = interaction as CommandInteraction

    if(commandName === "help") { Slash_Help(interaction)}
    if(commandName === "add-reminder") { Slash_AddReminder(interaction, options)}
    if(commandName === "show-all-reminders") { Slash_ShowAllreminders(interaction)}
})

client.login(token)