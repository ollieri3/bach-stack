import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { sql } from "drizzle-orm";

import { db } from "~/db";

import bach from "./bach.png";

export const meta: MetaFunction = () => {
  return [
    { title: "Bach Stack 🎼" },
    { name: "description", content: "Welcome to the Bach Stack" },
  ];
};

export async function loader() {
  let isDBConnected = false;
  try {
    await db.execute(sql`SELECT 1;`);
    isDBConnected = true;
  } catch (err) {
    isDBConnected = false;
  }
  return json({ isDBConnected });
}

export default function Index() {
  const { isDBConnected } = useLoaderData<typeof loader>();
  return (
    <main className="flex h-screen w-screen items-center justify-center bg-orange-100">
      <div className="flex flex-col items-center">
        <img src={bach} height={250} width={250} alt="" className="my-10" />
        <h1 className="bold font-serif text-5xl">Welcome to the Bach Stack</h1>
        <div className="my-10 flex items-center gap-2 text-sm text-gray-600">
          <span>{isDBConnected ? "🟢" : "🔴"}</span>Database Connection
        </div>
      </div>
    </main>
  );
}
