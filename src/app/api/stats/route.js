
import { NextResponse } from "next/server";
import { stats } from "@/lib/mockData/stats";

export async function GET() {
  return NextResponse.json(stats);
}
