"use client"
import { useProducts } from "@/features/product"
import { type Product } from "@/types/type"



export default function Product() {
  const { data: products, isLoading: productLoading } = useProducts()
  const renderElement = () => products?.map((product: Product, index: number) => {
    return (
      <div key={index} className="border-2 border-black">
        <h1 className="">{product.title}</h1>
        <h1 className="">${product.price}</h1>
        <h1 className="">${product.category}</h1>
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
