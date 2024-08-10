import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ status: 200 })
}

export async function POST(request: NextRequest) {
    const response = await request.json()
    console.log(response)
    return NextResponse.json({ status: 200, message: "Login Success" })
}