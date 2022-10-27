import { use } from "react";

async function getUsers() {
  //   return { users: [{ id: 1, name: "testman" }] };
  let res = await fetch("http://localhost:3000/api/users");
  return res.json();
}
export default async function Users() {
  let { users } = await getUsers();
  //   let { users } = use(getUsers());

  return (
    <div style={{ padding: "0 50px 0 0" }}>
      <h2>Users</h2>
      <ul style={{ padding: "0", listStyleType: "none" }}>
        {users.map((obj) => {
          return <li key={obj.id}>{obj.name}</li>;
        })}
      </ul>
    </div>
  );
}
