import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  const db = (await connectDB).db("forum");
  const { id } = req.query;

  if (req.method === "DELETE") {
    try {
      const item = await db
        .collection("post")
        .findOne({ _id: new ObjectId(id) });

      if (item.author !== session.user.email) {
        return res.status(500).json("다른 사람 거 삭제 못해요!");
      }

      await db.collection("post").deleteOne({ _id: new ObjectId(id) });

      return res.status(200).json("식제 완료");
    } catch (error) {
      console.log(error);
      return res.status(500).json("식제 완료");
    }
  }
}
