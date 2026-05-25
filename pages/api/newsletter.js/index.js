import { connectToDatabase } from "../../../lib/dbConnect";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "invalid input!" });
      return;
    }
    const userData = {
      email: userEmail,
    };
    let emailCollection;
    try {
      const { db } = await connectToDatabase();
      emailCollection = db.collection("Emails");
    } catch (error) {
      res.status(500).join({ message: "connection to database failed!" });
      return;
    }
    try {
      await emailCollection.insertOne({ ...userData });
    } catch (error) {
      res.status(500).join({ message: "cant insert" });
      return;
    }
    res.status(201).json({ message: "signed up", data: userData });
  }
}
export default handler;
