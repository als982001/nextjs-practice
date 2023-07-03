"use client";

import { useRouter } from "next/navigation";

export default function RefreshButton() {
  let router = useRouter();

  return <button onClick={() => router.refresh()}>새로고침</button>;
}
