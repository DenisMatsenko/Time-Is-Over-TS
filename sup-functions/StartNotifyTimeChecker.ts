import DiscordJS, {Client, EmbedBuilder} from 'discord.js'

const Hour_for_notify = 7

export default async function StartNotifyTimeChecker(client: Client) {
    setInterval(() => {
        if(new Date().getHours() == Hour_for_notify) StartSendNotify()
    }, 1000)
}

const StartSendNotify = () => {
    //console.log("here")
}