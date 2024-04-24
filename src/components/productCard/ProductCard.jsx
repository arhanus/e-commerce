import React from 'react'
import Image from "next/image"
import { FaStar } from 'react-icons/fa'
const ProductCard = ({product}) => {
    const {image, title, rating, price} = product
    
    return (
    
    <div className="flex flex-col duration-300 hover:border-black items-center justify-center border-2 h-400 w-300 overflow-hidden mb-14">
        <div className="w-300 h-400 relative mt-4">
            <Image alt={title} src={image} fill className="object-contain"/>
        </div>
        <div className="w-full h-32 gap-2 flex flex-col justify-center items-center mt-6 font-semibold text-black ">
            <div className="flex justify-center items-center">{title.slice(0,20)}...</div>
            <div className="flex justify-center items-center gap-2"><FaStar color='gold'/>{rating && rating.rate}</div>
            <div className="flex justify-center items-center text-lg">{price} $</div>
        </div>
        
    </div>
  )
}

export default ProductCard