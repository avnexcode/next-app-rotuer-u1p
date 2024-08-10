"use client"
import { useProducts } from "@/features/product"

type Product = {
  id: number;
  name: string;
  price: number;
};


export default function Product() {
  const { data: products, isLoading: productLoading } = useProducts()
  console.log(products)
  const renderElement = () => products?.map((product: Product, index: number) => {
    return (
      <div key={index} className="border-2 border-black">
        <h1 className="">{product.name}</h1>
        <h1 className="">${product.price}</h1>
      </div>
    )
  })

  return (
    <div className="">
      <div className="flex flex-col gap-5">
        {productLoading ? <h1>Loading...</h1> : renderElement()}
      </div>
    </div>
  )
}
