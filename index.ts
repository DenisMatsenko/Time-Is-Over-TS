import DiscordJS, { ActivityFlags, SlashCommandBuilder, InteractionType ,  GatewayIntentBits, EmbedBuilder, PermissionsBitField, MessageActivityType, CommandInteraction  } from 'discord.js'
import { token } from './settings/settings'
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
    AddCommandsToBot(client.application?.commands)
    StartNotifyTimeChecker(client)

    console.log('Time is over is ready!!!')
}) 

// client.on('interactionCreate', async (interaction) => {
//     let { commandName, options } = interaction as CommandInteraction

//     // if(interaction.guild !== null) {
        
//     //     if(commandName === "help") { SlashHelp(interaction, options, client)}

//     //     if(commandName === "add-test") { SlashAddTest(interaction, options, client)}

//     //     if(commandName === "show-all-tests") {console.log("gg"); SlashShowAllTests(interaction, options, client)}

//     } 
//     //else CommOnlyServsWarning()
// })

client.login(token)