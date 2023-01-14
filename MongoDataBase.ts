import { MongoClient } from "mongodb";
import { IReminder } from "./settings/settings";
const uri = "mongodb+srv://FirstDBUser:Dm2016dM@cluster0.oi18chy.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

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
    try {
      const database = client.db('SchoolReminder');
      const collection = database.collection('reminders');
      collection.insertOne(test)

    } finally {
      console.log("Test-reminder successfully created!")
    }
}

export async function GetAllRemindersFromDataBase() {
    try {
        const database = client.db('SchoolReminder');
        const collection = database.collection('reminders');
      
        return await collection.find().toArray() as IReminder[];
 
    } finally {
        console.log("All tests successfully geted!")
    }
}