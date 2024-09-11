"use client"
import Modal from "@/components/fragments/Modal";
import { unstable_noStore } from "next/cache";
import { useEffect, useState } from "react";

type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
};

type DetailProductProps = {
    params: {
        id: number
    }
}

export default function DetailProduct(props: DetailProductProps) {
    const { id } = props.params
    const [product, setProduct] = useState<Product>();
    const [isLoading, setIsLoading] = useState<boolean>(true);


    useEffect(() => {
        const fetchProducts = async () => {
            unstable_noStore()
            try {
                const res = await fetch(`http://localhost:3000/api/products?id=${id}`, {
                    next: {
                        tags: ["products"]
                        // revalidate: 5
                    }
                });
                const data = await res.json();
                setProduct(data.product);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProducts();
    }, [id]);
    
    return (
        <div key={product?.id} className="border-2 border-black px-10 py-2">
            <img
                src={product?.image}
                alt={product?.title}
                width={300}
                height={300}
                style={{ objectFit: "contain" }}
            />
            <h1>{product?.id}</h1>
            <h1>{product?.title}</h1>
            <h1>{product?.price}</h1>
        </div>
    )
}
