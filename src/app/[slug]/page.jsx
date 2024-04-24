"use client";
import React, { Suspense, useState } from "react";
import { getProduct } from "@/lib/actions";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import SinglePageBtn from "@/components/singlePageBtn/SinglePageBtn";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/loading/Loading";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const Slug = ({ params }) => {
  const [desc, setDesc] = useState(false);

  const { slug } = params;

  const { data, isLoading, error } = useQuery({
    queryKey: ["product"],
    queryFn: () => getProduct(slug),
  });
 
  if (isLoading)
    return (
      <div className="flex justify-center items-center max-w-screen h-screen">
        <div className="absolute top-96">
          <Loading/>
        </div>
      </div>
    );

  if (error) return { error: "Error loading product" };
  console.log("DATA: ", data)
  const { title, price, description, category, image, rating } = data;
  
  return (
    <div className=" h-screen max-w-screen flex justify-center items-center">
      <div className="flex flex-row h-700 w-1000 justify-center items-center gap-28">
        <div className="relative w-500 h-500 ml-8">
          <Suspense fallback={<p>Loading...</p>}>
            <Image src={image} alt="" fill className="object-contain" />
          </Suspense>
        </div>
        <div className="flex flex-col justify-center items-start gap-9 w-500 p-10">
          <h1 className="text-3xl font-bold">{title.slice(0, 50)}...</h1>
          <hr className="w-full" />
          <div className="flex flex-col items-center gap-2">
            <p className="text-lg  max-h-48 overflow-auto">
              {desc ? description : <>{description.slice(0, 200)}...</>}
            </p>
            <button
              className="bg-gray-300 p-2 rounded-full hover:bg-gray-400 duration-150"
              onClick={() => setDesc(!desc)}
            >
              {desc ? <SlArrowUp size={15} /> : <SlArrowDown size={15} />}
            </button>
          </div>
          <h2 className="flex text-lg font-semibold text-gray-600">
            CATEGORY: {category.toUpperCase()}
          </h2>

          <h2 className="flex text-lg font-semibold items-center gap-3">
            <FaStar color="gold" /> {rating.rate}{" "}
            <div className="text-slate-400">({rating.count})</div>
          </h2>
          <h2 className="text-2xl font-semibold">{price}$</h2>

          <SinglePageBtn />
        </div>
      </div>
    </div>
  );
};

export default Slug;
