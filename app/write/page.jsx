export default function Write() {
  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="Title 입력" />
        <input name="content" placeholder="Content 입력" />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
