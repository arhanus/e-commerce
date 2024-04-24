import { getProductByCategory } from '@/lib/actions'
import React from 'react'
import ProductCard from "@/components/productCard/ProductCard"
import Link from "next/link"

const Electronic = async() => {

  
  const products = await getProductByCategory('electronics')
  
  
  return (
    <div className="max-w-screen min-h-screen flex flex-col items-center justify-center gap-10">
      <h1 className="text-2xl font-bold mt-28">Electronics</h1>
      <div className="flex justify-center gap-8 flex-wrap">
        {
        products.map((product) => {
          return (
            <div key={product.id}>
            <Link  href={`${product.id}`}>
              <ProductCard key={product.id} product={product} />
            </Link>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default Electronic