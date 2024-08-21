"use server";

export default async function ServerPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (res) => res.json()
  );

  return (
    <>
      <p>{res.title}</p>
    </>
  );
}
