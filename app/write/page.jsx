"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";

export default function Write() {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session.data === null) {
      router.push("/");
    }
  }, [session]);

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
