import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const { id } = props.params;
  const db = (await connectDB).db("forum");
  const result = await db.collection("post").findOne({ _id: new ObjectId(id) });

  return (
    <div className="p-20">
      <h4>수정페이지</h4>
      <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={result.title} />
        <input name="content" defaultValue={result.content} />
        <input type="hidden" name="_method" value="PATCH" />
        <input type="hidden" name="id" value={id} />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}
