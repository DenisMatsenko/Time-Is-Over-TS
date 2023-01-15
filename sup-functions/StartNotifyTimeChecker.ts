import DiscordJS, {Client, EmbedBuilder} from 'discord.js'
import { hourForNotify } from '../settings/settings'
import DelteteOldReminders from './DeleteOldReminders'
import SendTestListToChannel from './SendTestListToChannel'
//import SendTestListToChannel from './SendTestListToChannel'

export default async function StartNotifyTimeChecker(client: Client) {
    setInterval(() => {
        if(new Date().getHours() == hourForNotify) StartSendNotify(client)
    }, 1000)
}

const StartSendNotify = async (client: Client) => {
    await DelteteOldReminders().finally(() => {SendTestListToChannel(client)})   
}