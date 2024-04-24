"use client"

import { cartSlice } from '@/lib/store'
import React from 'react'
import { PiBagThin } from "react-icons/pi"
import { VscChromeClose } from "react-icons/vsc";
import { FaTrashCan } from "react-icons/fa6";

const Cart = () => {
    const items = cartSlice((items) => items.items)
    const setCart = cartSlice((state) => state.setCart)
    const cartOpen = cartSlice((state) => state.cartOpen)
    
    
    return (
    <>
    <button className="flex flex-col items-center hover:underline" onClick={setCart}>
            <PiBagThin size={30}/>
            <div className="flex justify-center items-center text-white rounded-full w-5 h-5 bg-red-600 text-sm absolute ml-6">{items}</div>
            <p className="text-sm">Cart</p>
    </button>
    <div className={`fixed bg-white border-2 top-0 border-slate-400 w-cart h-screen z-10 right-0 ${cartOpen === true ? (null) : ("hidden")}`} >
        <div className='flex flex-col items-start p-6 gap-6'>
            <div className='w-full h-800 max-h-500'>
                <div className='flex flex-col items'>
                    <div className='flex justify-between items-center mb-3'>
                    <h1 className='text-3xl font-semibold'>Cart</h1>
                    <button className='flex items-center justify-center font-semibold bg-gray-300 relative p-4 w-4 h-4 rounded-full text-black hover:bg-gray-400 duration-150' onClick={setCart}><div><VscChromeClose/></div></button>
                    </div>
                    <hr  className='w-full'/>
                </div>
                <div>
                    Products
                </div>     
            </div>
            
            <button className='w-full h-14 bg-black border-2 border-black text-slate-200 font-semibold rounded-md hover:bg-white hover:text-black duration-300'>BUY</button>
            
        </div>
    </div>
    </>
  )
}

export default Cart