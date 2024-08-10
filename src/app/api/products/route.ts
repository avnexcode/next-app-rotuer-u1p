import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const products = [
    {
        id: 1,
        name: "Adidas",
        price: 1000000,
    },
    {
        id: 2,
        name: "Palo Alto",
        price: 300000,
    },
];

const querySchema = z.object({
    id: z.string().optional(),
});

export async function GET(request: NextRequest) {
    const url = new URL(request.url);
    const { searchParams } = url;

    const result = querySchema.safeParse(Object.fromEntries(searchParams));

    if (!result.success) {
        return NextResponse.json({ status: 400, message: "Invalid query parameters", errors: result.error.errors });
    }

    const { id } = result.data;

    if (id) {
        const product = products.find(item => item.id === Number(id));
        if (product) {
            return NextResponse.json({ status: 200, message: "Product Detail", product });
        } else {
            return NextResponse.json({ status: 404, message: "Product Not Found" });
        }
    }
    return NextResponse.json({ status: 200, message: "Success Fetching Products", products });
}
