
import { orders } from "@/lib/mockData/orders";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({ success: true, data: orders });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch orders", message: error.message },
      { status: 500 }
    );
  }
}