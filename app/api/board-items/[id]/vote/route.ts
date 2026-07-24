import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { votes } from "@/db/schema";
import { getOrCreateVisitorId } from "@/lib/visitor";
import { and, eq } from "drizzle-orm";

export async function POST(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const boardItemId = Number(id);
  if (!Number.isInteger(boardItemId)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }

  const visitorId = await getOrCreateVisitorId();

  const existing = await db
    .select()
    .from(votes)
    .where(
      and(eq(votes.boardItemId, boardItemId), eq(votes.visitorId, visitorId)),
    )
    .limit(1);

  if (existing.length > 0) {
    return NextResponse.json(
      { voted: false, reason: "already_voted" },
      { status: 409 },
    );
  }

  const [vote] = await db
    .insert(votes)
    .values({ boardItemId, visitorId })
    .returning();
  return NextResponse.json({ voted: true, vote }, { status: 201 });
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const boardItemId = Number(id);
  const visitorId = await getOrCreateVisitorId();

  await db
    .delete(votes)
    .where(
      and(eq(votes.boardItemId, boardItemId), eq(votes.visitorId, visitorId)),
    );

  return NextResponse.json({ voted: false });
}
