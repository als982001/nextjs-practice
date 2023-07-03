"use client";

import { useParams, usePathname, useSearchParams } from "next/navigation";

export default function URLCheckButton() {
  let pathName = usePathname();
  let searchParams = useSearchParams();
  let params = useParams();

  return (
    <button
      onClick={() => {
        alert(`Path Name: ${pathName}`);
        alert(`Search Params: ${searchParams}`);
        alert(`params: ${params}`);
      }}
    >
      URL 정보 확인
    </button>
  );
}
