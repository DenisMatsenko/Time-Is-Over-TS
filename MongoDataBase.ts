import { MongoClient } from "mongodb";
import { Test } from "./settings/settings";
// Replace the uri string with your connection string.
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

export async function AddTestToDataBase(test: Test) {
    try {
      const database = client.db('SchoolReminder');
      const collection = database.collection('reminders');
      collection.insertOne(test)
      
    } finally {
      await client.close();
      console.log("Test-reminder successfully created!")
    }
  }