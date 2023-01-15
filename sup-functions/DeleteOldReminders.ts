import { GetQueryRemindersFromDataBase, RemoveReminderFromDataBase } from "../MongoDataBase";
const format = require('date-format');

export default async function DelteteOldReminders() {
    const reminders = await GetQueryRemindersFromDataBase({ reminder_date: GetYesterdayDate() })

    reminders.forEach(reminder => {
        RemoveReminderFromDataBase(reminder)
    });
}

const GetYesterdayDate = () => format.asString('dd.MM', new Date(new Date().getTime() - 24*60*60*1000))