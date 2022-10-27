import { use } from "react";

async function getComments() {
  //   return { comments: [{ id: 1, name: "test comment" }] };
  let res = await fetch("http://localhost:3000/api/comments");
  return res.json();
}
export default async function Comments() {
  let { comments } = await getComments();
  //   let { comments } = use(getComments());

  return (
    <div style={{ padding: "0 50px 0 0" }}>
      <h2>Comments</h2>
      <ul style={{ padding: "0", listStyleType: "none" }}>
        {comments.map((obj) => {
          return <li key={obj.id}>{obj.name}</li>;
        })}
      </ul>
    </div>
  );
}
