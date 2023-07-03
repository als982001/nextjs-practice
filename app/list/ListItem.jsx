"use client";

import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <div>
      {result.map((item) => (
        <div className="list-item" key={item._id}>
          <Link prefetch={false} href={`/detail/${item._id}`}>
            <h4>{item.title}</h4>
          </Link>
          <Link href={`/edit/${item._id}`} className="list-btn">
            ✏️
          </Link>
          <span
            onClick={async (event) => {
              try {
                const result = await fetch(`/api/delete?id=${item._id}`, {
                  method: "DELETE",
                });
                const message = await result.json();

                alert(message);

                event.target.parentElement.opacity = 0;
                setTimeout(() => {
                  event.target.parentElement.style.display = "none";
                }, 1000);
              } catch (error) {
                console.log(error);
              }
            }}
          >
            🗑️
          </span>
          <p>{item.author}</p>
        </div>
      ))}
    </div>
  );
}
