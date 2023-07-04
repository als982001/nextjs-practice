import { connectDB } from "@/utils/database";
import ListItem from "./ListItem";

export const revalidate = 10;

export default async function List() {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  result = result.map((item) => {
    item._id = item._id.toString();
    return item;
  });

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
}
