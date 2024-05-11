import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/utils/sendEmail";

const rateLimitMap = new Map();

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || request.ip;
  const limit = 5; // Limiting requests to 5 per minute per IP
  const windowMs = 60 * 1000; // 1 minute

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, {
      count: 0,
      lastReset: Date.now(),
    });
  }

  const ipData = rateLimitMap.get(ip);

  if (Date.now() - ipData.lastReset > windowMs) {
    ipData.count = 0;
    ipData.lastReset = Date.now();
  }

  if (ipData.count >= limit) {
    return NextResponse.json(
      {
        error: "Too many requests. Please try again later.",
      },
      {
        status: 429,
      },
    );
  }

  ipData.count += 1;

  try {
    const { name, email, subject, message } = await request.json();

    await sendEmail({ name, email, subject, message });

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
