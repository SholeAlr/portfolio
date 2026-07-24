"use server";

import { db } from "@/lib/db";
import { boardItems } from "@/db/schema";
import { createBoardItemSchema } from "@/lib/validations/board-item";

export async function createBoardItem(input: unknown) {
  const validatedFields = createBoardItemSchema.safeParse(input);

  if (!validatedFields.success) {
    return {
      success: false,
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const [newBoardItem] = await db
      .insert(boardItems)
      .values({
        title: validatedFields.data.title,
        description: validatedFields.data.description,
        creatorName: validatedFields.data.creatorName,
        creatorEmail: validatedFields.data.creatorEmail,
      })
      .returning();

    return {
      success: true,
      data: newBoardItem,
    };
  } catch (error) {
    console.error("Failed to create board item:", error);

    return {
      success: false,
      error: "Something went wrong while creating your idea.",
    };
  }
}

export async function getBoardItems() {
  const items = await db.select().from(boardItems);

  return items;
}
