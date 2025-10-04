
import { stats } from "@/lib/mockData/stats";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({ success: true, data: stats });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch stats", message: error.message },
      { status: 500 }
    );
  }
}
