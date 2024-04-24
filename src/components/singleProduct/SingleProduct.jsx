"use client"
import React from 'react'
import { getProduct } from '@/lib/actions'
import { useQuery } from "@tanstack/react-query"

const SingleProduct = ({params}) => {
    const {slug} = params
    
    const {data, error, isLoading} = useQuery({
        queryKey: ['product', slug],
        queryFn: getProduct(slug)
    })
    
    if(isLoading) return <div>Loading...</div>
    if (error) throw new Error("Something went wrong")
    return (
    <div>{data}</div>
  )
}

export default SingleProduct