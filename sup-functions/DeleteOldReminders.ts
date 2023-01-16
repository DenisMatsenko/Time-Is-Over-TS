import { GetQueryRemindersFromDataBase, RemoveReminderFromDataBase } from "../MongoDataBase";

export default async function DelteteOldReminders() {
    const reminders = await GetQueryRemindersFromDataBase({ reminder_date: GetYesterdayDate() })

    reminders.forEach(reminder => {
        RemoveReminderFromDataBase(reminder)
    });
}

const GetYesterdayDate = () => {
    const yesterday = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
    return `${ToTwoChar(yesterday.getDate())}.${ToTwoChar(yesterday.getMonth()+1)}`
}

const ToTwoChar = (int: number) => {
    if(int < 10) return `0${int}`
    return int
}