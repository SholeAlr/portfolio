import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { votes } from "@/db/schema";
import { getOrCreateVisitorId } from "@/lib/visitor";
import { eq } from "drizzle-orm";

export async function GET() {
  const visitorId = await getOrCreateVisitorId();

  const myVotes = await db
    .select({ boardItemId: votes.boardItemId })
    .from(votes)
    .where(eq(votes.visitorId, visitorId));

  return NextResponse.json(myVotes.map((v) => v.boardItemId));
}
