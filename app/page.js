import { Suspense } from "react";
import Users from "./users";
import Companies from "./companies";

export default function Page() {
  return (
    <div style={{ display: "flex" }}>
      <Suspense fallback={<div>Loading users...</div>}></Suspense>
      <Suspense fallback={<div>Loading companies...</div>}></Suspense>
      <Users />
      <Companies />
    </div>
  );
}
