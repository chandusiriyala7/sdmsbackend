// utils/db.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
let cachedClient = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return { client: cachedClient, db: cachedClient.db() };
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  cachedClient = client;
  return { client, db: client.db() };
}
