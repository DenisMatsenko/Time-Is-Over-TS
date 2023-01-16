import { Client } from 'discord.js'
import { hourForNotify } from '../settings/settings'
import ClearChannel from './ClearChannel'
import DelteteOldReminders from './DeleteOldReminders'
import SendTestListToChannel from './SendTestListToChannel'

export default async function StartEventTimeChecker(client: Client) {
    setInterval(async () => {
        if (new Date().getHours() == hourForNotify) {
            await ClearChannel(client).then(() => StartSendNotify(client));
        }
    }, 1800000);
}

const StartSendNotify = async (client: Client) => 
    await DelteteOldReminders().then(() => {SendTestListToChannel(client)})   
