import { use } from "react";

async function getCompanies() {
  // return { companies: [{ id: 1, name: "testman" }] };
  let res = await fetch("http://localhost:3000/api/companies");
  return res.json();
}
export default async function Users() {
  let { companies } = await getCompanies();
  // let { companies } = use(getCompanies());

  return (
    <div style={{ padding: "0 50px 0 0" }}>
      <h2>Companies</h2>
      <ul style={{ padding: "0", listStyleType: "none" }}>
        {companies.map((obj) => {
          return <li key={obj.id}>{obj.name}</li>;
        })}
      </ul>
    </div>
  );
}
