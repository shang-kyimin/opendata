import { db } from "@/db";
import { InsertMessage, Table, messagesTable } from "@/db/schema";
import { updateCountsService } from "./counts.service";

export async function getMessagesService({
  quantity = 1,
}: {
  quantity?: number,
}) {
  const apiService = "messages/community";

  const messages = await db.select().from(messagesTable).limit(quantity);

  return {
    apiService,
    length: messages.length,
    results: messages,
  };
}

export async function postMessagesService(data: InsertMessage) {
  const apiService = "messages/community";

  const messages = await db.insert(messagesTable).values(data).returning({
    id: messagesTable.id, anonymous: messagesTable.anonymous, message: messagesTable.message, createdAt: messagesTable.createdAt
  });
  
  if (messages.length <= 0) {
    return;
  }

  const counts = await updateCountsService(Table.messages);

  return [
    {
      apiService,
      length: messages.length,
      results: messages,
    },
    counts,
  ]
}


