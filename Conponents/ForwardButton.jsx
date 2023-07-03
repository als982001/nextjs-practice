"use client";

import { useRouter } from "next/navigation";

export default function ForwardButton() {
  let router = useRouter();

  return <button onClick={() => router.forward()}>알으로</button>;
}
