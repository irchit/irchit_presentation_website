import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!uri) {
  throw new Error("❌ Please add your MongoDB URI to .env");
}

if (process.env.NODE_ENV === "development") {
  // Use a global variable so the client isn't re-created on every reload in dev
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, just create a new client once
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
