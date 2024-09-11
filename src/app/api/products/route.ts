import { NextRequest, NextResponse } from "next/server";

const products = [
    {
        id: 1,
        title: "Nike Vaporfly 3 Electric",
        price: 3559000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c7d09109-ca02-4bc9-97b3-3d4c99c3a0c2/vaporfly-3-electric-road-racing-shoes-ZR5Glm.png"
    },
    {
        id: 2,
        title: "Nike Pegasus 41 Electric",
        price: 2249000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/49545dac-67b5-4c49-b82f-83dcd07b375a/pegasus-41-electric-road-running-shoes-CNd0pW.png"
    },
    {
        id: 3,
        title: "Nike Air Max Dn Premium Electric",
        price: 2849000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/416fc7f2-500e-474c-83d2-fa691976b32c/air-max-dn-electric-shoes-3pwX55.png"
    },
    {
        id: 4,
        title: "Nike Air VaporMax 2023 Flyknit Electric",
        price: 3369000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/64f064e4-4731-45ed-9e10-0e6b80fa4b1a/air-vapormax-2023-flyknit-electric-shoes-1q11q1.png"
    },
    {
        id: 5,
        title: "Nike InfinityRN 4 Electric",
        price: 2649000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fbe575e0-b8c7-45ea-8a71-fa20ae683c06/infinityrn-4-electric-road-running-shoes-FkGQcG.png"
    },
    {
        id: 6,
        title: "Nike InfinityRN 5 Electric",
        price: 2649000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fbe575e0-b8c7-45ea-8a71-fa20ae683c06/infinityrn-4-electric-road-running-shoes-FkGQcG.png"
    },
    {
        id: 7,
        title: "Nike InfinityRN 5 Electric",
        price: 2649000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fbe575e0-b8c7-45ea-8a71-fa20ae683c06/infinityrn-4-electric-road-running-shoes-FkGQcG.png"
    },
];

export const GET = async (request: NextRequest) => {
    const url = new URL(request.url);
    const { searchParams } = url;

    const id = searchParams.get('id')

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
