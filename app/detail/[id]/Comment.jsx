"use client";

import { useEffect, useState } from "react";

export default function Comment({ id }) {
  let [comment, setComment] = useState("");
  let [comments, setComments] = useState([]);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading((prev) => true);

      const result = await fetch(`/api/get/comments?id=${id}`, {
        method: "GET",
      });
      const json = await result.json();
      setComments((prev) => json);

      setIsLoading((prev) => false);
    })();
  }, []);

  return (
    <div>
      <div>댓글목록</div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {comments.map((cmt) => (
            <span key={cmt._id.toString()}>{cmt.content}</span>
          ))}
        </>
      )}
      <input onChange={(event) => setComment(event.target.value)} />
      <button
        onClick={async () => {
          const result = await fetch("/api/post/comment", {
            method: "POST",
            body: JSON.stringify({ comment, id }),
          });
          console.log(result);
        }}
      >
        댓글전송
      </button>
    </div>
  );
}
