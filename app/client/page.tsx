"use client";

import { useEffect, useState } from "react";

export default function ClientPage() {
  const [title, setTitle] = useState<string | null>(null);

  useEffect(() => {
    (async function () {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      ).then((res) => res.json());
      setTitle(res.title);
    })();
  }, []);

  return (
    <>
      <p>{title}</p>
    </>
  );
}
