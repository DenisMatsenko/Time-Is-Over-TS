import { MongoClient } from "mongodb";
import { IReminder, mongoDBCollectionName, mongoDBName, mongoDBUri } from "./settings/settings";

const client = new MongoClient(mongoDBUri);
const database = client.db(mongoDBName);
const collection = database.collection(mongoDBCollectionName);

export async function AddReminderToDataBase(test: IReminder) {
    try {collection.insertOne(test)} 
    finally {console.log("Test-reminder successfully created!")}
}

export async function RemoveReminderFromDataBase(test: IReminder) {
  try {collection.deleteOne(test)} 
  finally {console.log("Test-reminder successfully removed!")}
}

export async function GetAllRemindersFromDataBase() {
    try {return await collection.find().toArray() as IReminder[]} 
    finally {console.log("All tests successfully geted!")}
}

export async function GetQueryRemindersFromDataBase(query: Object) {
  try {return await collection.find(query).toArray() as IReminder[]} 
  finally {console.log("Query tests successfully geted!")}
}