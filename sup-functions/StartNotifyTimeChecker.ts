import { Client } from 'discord.js'
import { hourForNotify } from '../settings/settings'
import DelteteOldReminders from './DeleteOldReminders'
import SendTestListToChannel from './SendTestListToChannel'

export default async function StartEventTimeChecker(client: Client) {
    setInterval(() => {
        if(new Date().getHours() == hourForNotify) StartSendNotify(client)
    }, 1800000)
}

const StartSendNotify = async (client: Client) => 
    await DelteteOldReminders().finally(() => {SendTestListToChannel(client)})   
