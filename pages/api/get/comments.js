import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const db = (await connectDB).db("forum");
  const { id } = req.query;

  const objectId = new ObjectId(id);

  const allComments = await db
    .collection("comments")
    .find({ parent: objectId })
    .toArray();

  console.log(allComments);

  return res.status(200).json(allComments);
}
