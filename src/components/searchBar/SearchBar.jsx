"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProducts } from "@/lib/actions";
import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import Link from "next/link";

const SearchBar = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const [value, setValue] = useState("");


  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    const search = data.filter((product) => {
      return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    return search;
  };

  if(isLoading) return(<h1></h1>) 
  
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center gap-2">
        <input
          onChange={onChange}
          type="text"
          value={value}
          placeholder="Search"
          className="border-2 outline-none pr-12 p-3 overflow-hidden w-100 rounded-full"
        />
        <button
          onClick={() => onSearch(value)}
          className="relative right-14 cursor-default"
        >
          <GoSearch size={30} color="gray"/>
        </button>
      </div>
      <div className="absolute bg-white top-20 z-10 border-2 rounded-2xl first:rounded-t-2xl">
        {data
          .filter((product) => {
            const searchTerm = value.toLowerCase();
            const title = product.title.toLowerCase();

            return (
              searchTerm && title.includes(searchTerm) && title !== searchTerm
            );
          })
          .slice(0, 10)
          .map((product) => {
            return (
              <>
                <Link href={`/${product.id}`}>
                  <div
                    onClick={() => onSearch(product.title)}
                    className="w-96 p-1 hover:bg-slate-200 box-border"
                    key={product.id}
                  >
                    {product.title}
                  </div>
                  <hr />
                </Link>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default SearchBar;
