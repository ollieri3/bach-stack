import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { sql } from "drizzle-orm";

import bach from "./bach.png";

import { db } from "~/db";

export const meta: MetaFunction = () => {
  return [
    { title: "Bach Stack 🎼" },
    { name: "description", content: "Welcome to the Bach Stack" },
  ];
};

export async function loader() {
  const result = await db.execute(sql`SELECT 1;`);
  const isDBConnected = result.rowCount === 1;
  return json({ isDBConnected });
}

export default function Index() {
  const { isDBConnected } = useLoaderData<typeof loader>();
  return (
    <main className=" w-screen h-screen flex items-center justify-center bg-orange-100">
      <div className="flex flex-col items-center">
        <img src={bach} height={250} width={250} alt="" className="my-10" />
        <h1 className="text-5xl bold font-serif">Welcome to the Bach Stack</h1>
        <div className="my-10 text-sm text-gray-600 flex items-center gap-2">
          <span>{isDBConnected ? "🟢" : "🔴"}</span>Database Connection
        </div>
      </div>
    </main>
  );
}
