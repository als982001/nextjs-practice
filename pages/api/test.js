import { connectDB } from "@/utils/database";

export default async function handler(req, res) {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  if (req.method === "GET") {
    const date = new Date();
    return res.status(200).json(date);
  }

  if (req.method === "POST") {
    return res.status(200).json(result);
  }

  return res.status(500).json("Else");
}
