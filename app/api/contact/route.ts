import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, message } = body;

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        {
          error: "Name, email, and message are required.",
        },
        { status: 400 },
      );
    }

    // Save message to NeonDB
    const [contact] = await sql`
      INSERT INTO contact_messages (
        name,
        email,
        message
      )
      VALUES (
        ${name.trim()},
        ${email.trim()},
        ${message.trim()}
      )
      RETURNING id, created_at
    `;

    return NextResponse.json(
      {
        success: true,
        id: contact.id,
        createdAt: contact.created_at,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        error: "Failed to save your message.",
      },
      { status: 500 },
    );
  }
}
