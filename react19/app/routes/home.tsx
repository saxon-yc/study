import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Suspense } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Welcome />
    </Suspense>
  );
}
