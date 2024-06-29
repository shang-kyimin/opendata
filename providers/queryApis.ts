"use server";

import { ApiType } from "@/app/api/[[...route]]/route";
import { InferResponseType, hc } from "hono/client";

const client = hc<ApiType>("http://localhost:3000/");

type ResType = InferResponseType<typeof client.api.random.usernames.$get>;

export async function getRandomUsername({
  quantity = 1,
}: {
  quantity?: number;
}) {
  if (quantity === 1) {
    const res = await client.api.random.usernames.$get({ query: { quantity: "1" } });
    if (!res.ok) {
      throw new Error("Error on fetching data");
    }
    
    const data: ResType = await res.json();
    return data;
  }

  const res = await client.api.random.usernames.$get({ query: { quantity: String(quantity) } });
  if (!res.ok) {
    throw new Error("Error on fetching data");
  }

  const data: ResType = await res.json();

  return data;
}


