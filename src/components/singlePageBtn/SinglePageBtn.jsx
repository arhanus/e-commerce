"use client"
import React from 'react'
import { cartSlice } from '@/lib/store'

const singlePageBtn = () => {
  
    const increaseItems = cartSlice((state) => state.increaseItems) 
    
    return (
    <button className=" bg-black border-2 border-black  p-4 w-full rounded-full text-slate-200 font-semibold hover:bg-white hover:text-black duration-300"  onClick={increaseItems}>Add to the cart</button>
    )
}

export default singlePageBtn