import { GetQueryRemindersFromDataBase, RemoveReminderFromDataBase } from "../MongoDataBase";

export default async function DelteteOldReminders() {
    const notifies = await GetQueryRemindersFromDataBase({ reminder_date: GetYesterdayDate() })

    notifies.forEach(reminder => {
        RemoveReminderFromDataBase(reminder)
    });
}

const GetYesterdayDate = () => `${new Date().getDate()}.${new Date().getMonth()-1}`


