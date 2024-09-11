import { NextResponse, NextRequest } from "next/server";
import { revalidateTag } from "next/cache";

export const POST = async (request: NextRequest) => {
    const { searchParams } = request.nextUrl;
    const tag = searchParams.get('tag');
    const token = searchParams.get('token');

    if (!tag || !token) {
        const missingParam = !tag ? "TAG" : "TOKEN";
        return NextResponse.json({ status: 400, message: `Missing ${missingParam} param` });
    }

    if (token !== "12345678") {
        return NextResponse.json({ status: 400, message: "Invalid TOKEN" });
    }

    revalidateTag(tag);

    return NextResponse.json({
        status: 200,
        message: "Success Revalidated",
        revalidate: true,
        now: Date.now()
    });
};
