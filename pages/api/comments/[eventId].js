import { connectToDatabase } from "../../../lib/dbConnect";

async function handler(req, res) {
  const { db } = await connectToDatabase();
  const eventId = req.query.eventId;
  if (req.method === "POST") {
    const body = req.body;
    const comment = {
      eventId,
      ...body,
    };
    const commentCollection = db.collection("comments");
    commentCollection.insertOne(comment);
    res.status(201).json({ message: "commented!", comment });
  }
  if (req.method === "GET") {
    const commentCollection = db.collection("comments");
    const comments = await commentCollection.find().sort({ _id: -1 }).toArray();

    res.status(200).json({ comments: comments });
  }
}
export default handler;
