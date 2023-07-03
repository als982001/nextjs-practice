import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import DetailLink from "./DetailLink";
import URLCheckButton from "@/Conponents/URLCheckButton";

export default async function Detail(props) {
  const { id } = props.params;

  let db = (await connectDB).db("forum");
  let result = await db.collection("post").findOne({ _id: new ObjectId(id) });

  return (
    <div>
      <h4>상세페이지임</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <DetailLink />
      <URLCheckButton />
    </div>
  );
}
