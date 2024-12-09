// pages/api/links.js
import { connectToDatabase } from "../../utils/db";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  if (req.method === "GET") {
    const data = await db.collection("formLinks").findOne({});
    if (!data) {
      await db.collection("formLinks").insertOne({ form1: "", form2: "" });
      return res.status(200).json({ form1: "", form2: "" });
    }
    res.status(200).json(data);
  } else if (req.method === "POST") {
    const { form1, form2 } = req.body;
    await db
      .collection("formLinks")
      .updateOne({}, { $set: { form1, form2 } }, { upsert: true });
    res.status(200).json({ success: true, form1, form2 });
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
