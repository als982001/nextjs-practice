"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  let router = useRouter();

  return <button onClick={() => router.back()}>뒤로</button>;
}
