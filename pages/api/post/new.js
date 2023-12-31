import { connectDB } from "@/utils/database";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);

  const db = (await connectDB).db("forum");

  if (req.method === "POST") {
    const { title, content } = req.body;

    if (title === "") {
      return res.status(500).json("제목이 비었습니다.");
    }
    if (content === "") {
      return res.status(500).json("내용이 비었습니다.");
    }

    try {
      await db
        .collection("post")
        .insertOne({ title, content, author: session.user.email });
      res.redirect(302, "/list");
    } catch (error) {
      return res.status(500).json("예기치 못한 에러 발생.");
    }
  }
}
