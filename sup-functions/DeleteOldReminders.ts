import { GetQueryRemindersFromDataBase, RemoveReminderFromDataBase } from "../MongoDataBase";
var format = require('date-format');

export default async function DelteteOldReminders() {
    const notifies = await GetQueryRemindersFromDataBase({ reminder_date: GetYesterdayDate() })

    notifies.forEach(reminder => {
        RemoveReminderFromDataBase(reminder)
    });
}

const GetYesterdayDate = () => format.asString('dd.MM', new Date(new Date().getTime() - 24*60*60*1000))


