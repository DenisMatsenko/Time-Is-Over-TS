import { Client } from 'discord.js'
import { hourForNotify, minutesForNotify } from '../settings/settings'
import ClearChannel from './ClearChannel'
import DelteteOldReminders from './DeleteOldReminders'
import SendTestListToChannel from './SendTestListToChannel'

export default async function StartEventTimeChecker(client: Client) {
    RunAtSpecificTimeOfDay(hourForNotify, minutesForNotify, async () => {await ClearChannel(client).then(() => StartSendNotify(client))})
}

const RunAtSpecificTimeOfDay = (hour: number, minutes: number, func: Function) => {
    const twentyFourHours = 86400000;
    const now: any = new Date();
    let eta_ms = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minutes, 0, 0).getTime() - now;
    if (eta_ms < 0)
    {
      eta_ms += twentyFourHours;
    }
    setTimeout(function() {
      //run once
      func();
      // run every 24 hours from now on
      setInterval(func, twentyFourHours);
    }, eta_ms);
}

const StartSendNotify = async (client: Client) => await DelteteOldReminders().finally(() => { SendTestListToChannel(client)})
