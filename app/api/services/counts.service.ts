import { db } from "@/db";
import { Table, countsTable } from "@/db/schema";
import { eq, sql } from "drizzle-orm";


export async function updateCountsService(tableId: number) {
  const apiService = "counts/auto-trigger";

  const counts = await db.update(countsTable).set({
    count: sql`${countsTable.count} + 1`,
  })
  .where(eq(countsTable.id, tableId))
  .returning({ id: countsTable.id, tableName: countsTable.tableName, count: countsTable.count });

  return {
    apiService,
    length: counts.length,
    results: counts,
  }
}


