import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ status: 200, message: "Welcome to Prot Prot API🌈" })
}