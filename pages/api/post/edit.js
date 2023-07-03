import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const db = (await connectDB).db("forum");

  // if (req.body._method === "PATCH")
  if (req.method === "POST") {
    const { title, content, id } = req.body;
    const updatedItem = { title, content };

    const item = await db.collection("post").findOne({ _id: new ObjectId(id) });

    await db
      .collection("post")
      .updateOne({ _id: item._id }, { $set: updatedItem });

    res.status(200).redirect(302, "/list");
  }
}
