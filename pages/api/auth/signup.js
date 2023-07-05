import { connectDB } from "@/utils/database";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  let db = (await connectDB).db("forum");

  if (req.method === "POST") {
    const hash = await bcrypt.hash(req.body.password, 10);

    if (
      req.body.name.length === 0 ||
      req.body.email.length === 0 ||
      req.body.password.length === 0
    ) {
      return res.status(500).json("빈 칸 없게 하세요!");
    }

    let sameEmailAccount = await db
      .collection("user_cred")
      .findOne({ email: req.body.email });

    if (sameEmailAccount) {
      return res.status(500).json("중복 계정이 존재합니다.");
    }

    const newAccount = { ...req.body, password: hash };

    await db.collection("user_cred").insertOne(newAccount);

    res.status(200).redirect(302, "/");
    // res.status(200).json("성공");
  }
}
