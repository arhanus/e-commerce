import Products from "@/components/products/Products";
import Link from "next/link";

export default async function Home() {
  
  
  return (
    <div className="flex flex-col items-center justify-center gap-10 max-w-screen overflow-hidden">
      <div className="flex items-center justify-center gap-20 mt-24 pb-2 w-full h-10 border-b-2 ">
          <Link href={"/electronics"} > <p className="text-md font-medium hover:text-gray-500">Electronics</p> </Link>
          <Link href={"/men-clothes"} > <p className="text-md font-medium hover:text-gray-500">Men Clothes</p> </Link>
          <Link href={"/women-clothes"} > <p className="text-md font-medium hover:text-gray-500">Women Clothes</p> </Link>
          <Link href={"/jewelry"} > <p className="text-md font-medium hover:text-gray-500">Jewelry</p> </Link>
      </div>
      <div className=" w-3/4 min-h-screen h-fit flex flex-wrap">
        <Products/>
      </div>
    </div>
  );
}
