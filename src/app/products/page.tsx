"use client";
import { useEffect, useState } from "react";
import { unstable_noStore as noStore } from 'next/cache';
import Link from "next/link";

type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
};

export default function ApiProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchProducts = async () => {
        noStore()
        try {
            const res = await fetch("http://localhost:3000/api/products", {
                next: {
                    tags: ["products"]
                    // revalidate: 5
                }
            });
            const data = await res.json();
            setProducts(data.products);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);

    const revalidating = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/revalidate?tag=products&token=12345678', {
                method: 'post'
            })
            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const renderElements = () =>
        products.map((product) => (
            <div key={product.id} className="border-2 border-black px-10 py-2">
                <img
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                />
                <h1>{product.id}</h1>
                <h1>{product.title}</h1>
                <h1>{product.price}</h1>
                <h1>
                    <Link href={`http://localhost:3000/products/detail/${product.id}`}>Detail</Link>
                </h1>
            </div>
        ));

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl mb-5">API Product</h1>
            <div className="mb-5">
                <button className="bg-gray-600 text-gray-100 px-5 py-2" onClick={revalidating}>Revalidate</button>
            </div>
            <div className="flex gap-5 items-center justify-center flex-col">
                <span className="text-xl text-red-500">Total Product : {products.length}</span>
                <div className="flex gap-5 flex-wrap justify-around">
                    {isLoading ? <h1>Loading broo...</h1> : renderElements()}
                </div>
            </div>
        </div>
    );
}
