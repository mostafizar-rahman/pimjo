
import { NextResponse } from "next/server";
import { products } from "@/lib/mockData/products";

export async function GET() {
  return NextResponse.json(products);
}
