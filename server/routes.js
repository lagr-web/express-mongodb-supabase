//if a more robust id:
//npm install uuid
//import: import { v4 as uuidv4 } from 'uuid';
//use it: newActor.id = uuidv4();

//https://medium.com/@heshramsis/building-a-crud-app-with-supabase-and-express-a-step-by-step-guide-for-junior-developers-81456b850910
//router.js

/**
 *
 * If you are using .env.local, it might not be automatically recognized, and you would need to load it explicitly, like dotenv.config({ path: '.env.local' }). However, the standard naming convention is to use just .env.
 */

import express from "express";
import ninjaData from "./assets/json/actors.json" assert { type: "json" };
import { createClient } from "@supabase/supabase-js";
import morgan from "morgan";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import { MongoClient, ObjectId } from "mongodb";

const uri = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(uri);

client
  .connect()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

dotenv.config();

const router = express.Router();

// Middleware to parse JSON and url-encoded form data
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.use(cors());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

//--------------------------------mongoDB-------------------------

router.get("/mymongo", async (request, response) => {
  //response.send("Hello, from mongo!");

  try {
    // Access the "Card" database and the "enemyes" collection
    const database = client.db("Card");
    const enemies = database.collection("enemyes");

    // Fetch all documents from the "enemyes" collection
    const result = await enemies.find({}).toArray();

    // Send the result as a JSON response
    response.json(result);
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
    response.status(500).send("Internal Server Error");
  }
});

router.get("/mymongo/:id", async (request, response) => {
  try {
    const database = client.db("Card");
    const enemies = database.collection("enemyes");

    // Extract the ID from the route parameters
    const id = request.params.id;

    // Validate that the provided id is a valid ObjectId
    if (!ObjectId.isValid(id)) {
      response.status(400).json({ error: "Invalid ObjectId" });
      return;
    }

    console.log(id);

    const result = await enemies.findOne(
      { "content._id": new ObjectId(id) },
      { projection: { content: { $elemMatch: { _id: new ObjectId(id) } } } }
    );
    console.log(result);

    if (!result) {
      // If no document is found, return a 404 Not Found response
      response.status(404).json({ error: "Document not found" });
    } else {
      // If the document is found, return it as JSON
      response.json(result);
    }
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
    response.status(500).send("Internal Server Error what the fuck");
  }
});

router.post("/mymongoinsert", async (request, response) => {
  const database = client.db("Card");
  const enemies = database.collection("enemyes");

  /*   const data = {
    id: "5",
    name: "Evil Knight",
    img: "mevilknight.png",
    information: { strength: 122, lives: 222 },
    text: "Just evil",
  }; */

  const formData = request.body;

  const data = {
    _id: new ObjectId(), //auto increment
    name: formData.name,
    img: formData.img,
    information: {
      strength: formData.strength,
      lives: formData.lives,
    },
    text: formData.text,
  };

  enemies
    .updateOne(
      {}, // Empty filter means update all documents in the collection
      { $push: { content: data } }
    )
    .then((result) => {
      console.log("Document inserted successfully:", result);
      response.status(201).json({ message: "Document inserted successfully" });
    })
    .catch((error) => {
      console.error("Error inserting document:", error);
      response.status(500).json({ message: "Internal server error" });
    });
});

//--------------------------------------------------------------------

router.get("/data", async (request, response) => {
  /**basic with static json
   * 
  const status = ninjaData.actors;
  response.send(status);

  */

  try {
    const { data, error } = await supabase
      .from("testarea")
      .select("id, name, lastname")
      .order("id", { ascending: false });

    if (error) {
      throw error;
    }

    response.json(data);
  } catch (error) {
    console.error("Error fetching data from Supabase:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

//---------------------------------------------------------------------

router.get("/data/:id", async (request, response) => {
  const userId = request.params.id;

  //const actor = ninjaData.actors.find((actor) => actor.id === userId);

  try {
    const { data, error } = await supabase
      .from("testarea")
      .select("id, name, lastname")
      .eq("id", userId);

    if (error) {
      throw error;
    }

    response.json(data);
  } catch (error) {
    console.error("Error fetching data from Supabase:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }

  /*   try {
    const { data, error } = await supabase
      .from("testarea")
      .select("*")
      // .select('*,other_table(column)')
      .eq("id", id);

    if (error) {
      throw error;
    }

    response.json(data);

  } catch (error) {
    console.error("Error fetching data from Supabase:", error);
    response.status(500).json({ error: "Internal Server Error" });
  } */
});

//---------------------------------------------------------------------

router.put("/data/:id", (request, response) => {
  const userId = request.params.id;

  //fake data
  const newData = {
    id: "1",
    name: "Betteski",
    image: "/assets/images/betteski.png",
    description: "Just a betteski.",
  };

  const actorIndex = ninjaData.actors.findIndex((actor) => actor.id === userId);

  if (actorIndex !== -1) {
    // Update the actor with the new data
    ninjaData.actors[actorIndex] = {
      ...ninjaData.actors[actorIndex],
      ...newData,
    };
    response.send(`Updated actor with ID ${userId}`);
  } else {
    response.status(404).send("Actor not found and not updated");
  }
});

//-------------------------------------------------------------------------

router.post("/data", (request, response) => {
  // Get the new actor data from the request body

  const newActor = {
    id: "1",
    name: "BadAss",
    image: "/assets/images/ninja.png",
    description: "Just a badass.",
  };

  // Assign a new ID (you may want to use a more robust method in a production environment)
  newActor.id = (ninjaData.actors.length + 1).toString();

  // Add the new actor to the data
  ninjaData.actors.push(newActor);

  // Send a response indicating success
  response.status(201).send(`Added new actor with ID ${newActor.id}`);
});

//------------------------------------------------------------------------------------------

router.get("/test", (request, response) => {
  response.send("Hello, World root!");
});

router.get("/testinsertone", (request, response) => {
  
  const database = client.db("Card");
  const enemies = database.collection("enemyes");

  try {
    enemies.insertOne({ name: "Jimmy Longwild", temperamount: 35 });
  } catch (e) {
    console.error("Error fetching data from Supabase:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
