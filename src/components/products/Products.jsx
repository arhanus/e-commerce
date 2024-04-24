"use client"

import React from 'react'
import ProductCard from '../productCard/ProductCard'
import Link from "next/link"
import { getProducts } from '@/lib/actions'
import { useQuery, useQueryClient } from "@tanstack/react-query"
import Loading from '../loading/Loading'



const Products = () => {
  
  const {data, isLoading, error} = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  })

  if(isLoading) return <div className="absolute top-1/2 right-1/2"><Loading/></div>
  if(error) throw new Error("some error occured")


  return (
    <div className= "flex flex-wrap justify-center items-center gap-10">
      {
        data.map((product) => {
          return (
            <div key={product.id}>
              <Link href={`${product.id}`}>
                <ProductCard product={product}/>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default Products