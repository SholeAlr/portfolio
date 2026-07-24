// app/api/board-items/route.ts
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { boardItems, votes } from "@/db/schema";
import { createBoardItemSchema } from "@/lib/validations/board-item";
import { eq, ne, count } from "drizzle-orm";

export async function GET() {
  const items = await db
    .select({
      id: boardItems.id,
      title: boardItems.title,
      description: boardItems.description,
      status: boardItems.status,
      createdByType: boardItems.createdByType,
      creatorName: boardItems.creatorName,
      demoUrl: boardItems.demoUrl,
      githubUrl: boardItems.githubUrl,
      blogUrl: boardItems.blogUrl,
      createdAt: boardItems.createdAt,
      voteCount: count(votes.id),
    })
    .from(boardItems)
    .leftJoin(votes, eq(votes.boardItemId, boardItems.id))
    .where(ne(boardItems.status, "archived"))
    .groupBy(boardItems.id)
    .orderBy(boardItems.createdAt);

  return NextResponse.json(items);
}

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = createBoardItemSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { creatorName, creatorEmail, ...rest } = parsed.data;

  const [item] = await db
    .insert(boardItems)
    .values({
      ...rest,
      creatorName: creatorName || null,
      creatorEmail: creatorEmail || null,
    })
    .returning();

  return NextResponse.json(item, { status: 201 });
}
