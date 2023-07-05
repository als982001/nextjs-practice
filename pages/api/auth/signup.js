import { connectDB } from "@/utils/database";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const hash = await bcrypt.hash(req.body.password, 10);

    const newAccount = { ...req.body, password: hash };

    let db = (await connectDB).db("forum");
    await db.collection("user_cred").insertOne(newAccount);

    res.status(200).json("성공");
  }
}
