import Image from "next/image";
import styles from "./page.module.css";
import { connectDB } from "@/utils/database";

export default async function Home() {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return <main>{result[0].title}</main>;
}
