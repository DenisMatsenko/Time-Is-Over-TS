import DiscordJS, { Client } from 'discord.js'
import { guildID } from '../settings/settings'

export default async function AddCommandsToBot(client: Client)  {
    const commands = client.guilds.cache.get(guildID)?.commands

    commands?.create({
        name: 'help',
        description: "show all bot commands.",
    })
      
    commands?.create({
        name: 'show-all-reminders',
        description: "show all tests & homeworks.",
    })

    commands?.create({
        name: "add-reminder",
        description: "Create test & homework reminder.",
        options: [
            {
                name: 'reminder-type',
                description: 'test, homework or action',
                required: true,
                type: DiscordJS.ApplicationCommandOptionType.String,
                choices: [
                    {
                        name: "Test",
                        value: "Test"
                    },
                    {
                        name: "Homework",
                        value: "Homework"
                    },
                    {
                        name: "Action",
                        value: "Action"
                    },
                ]
            },
            {
                name: 'reminder-subject',
                description: 'reminder subject name',
                required: true,
                type: DiscordJS.ApplicationCommandOptionType.String
            },
            {
                name: 'reminder-date',
                description: 'date in the format: 01.01',
                required: true,
                type: DiscordJS.ApplicationCommandOptionType.String
            },
            {
                name: 'reminder-topic',
                description: 'reminder topic...',
                required: true,
                type: DiscordJS.ApplicationCommandOptionType.String
            },
            {
                name: 'reminder-group',
                description: 'All, 1, 2',
                required: true,
                type: DiscordJS.ApplicationCommandOptionType.String,
                choices: [
                    {
                        name: "All",
                        value: "All"
                    },
                    {
                        name: "1",
                        value: "1"
                    },
                    {
                        name: "2",
                        value: "2"
                    },
                ]
            },
            {
                name: 'reminder-links',
                description: 'links to docs / photos / discord messages',
                required: false,
                type: DiscordJS.ApplicationCommandOptionType.String
            },
        ],
    })
}