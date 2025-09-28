
import { NextResponse } from "next/server";
import { orders } from "@/lib/mockData/orders";

export async function GET() {
  return NextResponse.json(orders);
}
