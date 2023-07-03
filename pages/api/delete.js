import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const db = (await connectDB).db("forum");
  const { id } = req.query;

  console.log(req.query);
  console.log(id);

  if (req.method === "DELETE") {
    try {
      await db.collection("post").deleteOne({ _id: new ObjectId(id) });

      return res.status(200).json("식제 완료");
    } catch (error) {
      console.log(error);
      return res.status(500).json("식제 완료");
    }
  }
}
