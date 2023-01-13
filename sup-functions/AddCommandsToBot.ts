import DiscordJS from 'discord.js'

export default async function AddCommandsToBot(commands: any)  {
    commands?.create({
        name: 'help',
        description: "show all bot commands.",
    })
      
    commands?.create({
        name: 'show-all-tests',
        description: "show all tests.",
    })

    commands?.create({
        name: "add-test",
        description: "Create test reminder.",
        options: [
            {
                name: 'test-subject',
                description: 'test subject name',
                required: true,
                type: DiscordJS.ApplicationCommandOptionType.String
            },
            {
                name: 'test-date',
                description: 'date in the format: 01.01',
                required: true,
                type: DiscordJS.ApplicationCommandOptionType.String
            },
            {
                name: 'test-topic',
                description: 'test topic...',
                required: true,
                type: DiscordJS.ApplicationCommandOptionType.String
            },
            {
                name: 'test-links',
                description: 'links to docs / photos / discord messages',
                required: false,
                type: DiscordJS.ApplicationCommandOptionType.String
            },
        ],
    })
}