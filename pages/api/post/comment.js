import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);

  const db = (await connectDB).db("forum");

  if (req.method === "POST") {
    const info = JSON.parse(req.body);

    const newComment = {
      content: info.comment,
      author: session.user.email,
      parent: new ObjectId(info.id),
    };

    await db.collection("comments").insertOne(newComment);

    res.status(200).end();
  }
}
