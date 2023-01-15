import { MongoClient } from "mongodb";
import { IReminder, mongoDBCollectionName, mongoDBName, mongoDBUri } from "./settings/settings";

const client = new MongoClient(mongoDBUri);
const database = client.db(mongoDBName);
const collection = database.collection(mongoDBCollectionName);

export async function runDB() {
  try {
    const database = client.db('SchoolReminder');
    const collection = database.collection('reminders');

    // Query for a movie that has the title 'Back to the Future'
    // const query = { core_class: 'IT' };
    // const students = await collection.find(query).toArray();
    // console.log("hi")
    // console.log(students);

    let giig = {
      name: "aaa",
      gg: "dwq",
    }

    collection.insertOne(giig)

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

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