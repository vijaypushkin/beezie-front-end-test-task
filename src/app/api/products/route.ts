import { products } from "@/constants/products";
import { NextResponse } from "next/server";

export async function GET() {
  // Add a 1.5 second delay to simulate loading
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return NextResponse.json(products);
}
