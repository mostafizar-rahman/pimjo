
import { products } from "@/lib/mockData/products";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products", message: error.message },
      { status: 500 }
    );
  }
}
