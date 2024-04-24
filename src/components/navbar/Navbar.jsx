
import React from 'react'
import Link from "next/link"
import { PiUserThin } from "react-icons/pi"
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";
import Image from "next/image"
import Cart from '../cart/Cart';
import SearchBar from '../searchBar/SearchBar';
import { auth } from "@/lib/auth"
import { getUser, handleLogout } from '@/lib/userActions';


const Navbar = async() => {
    const session = await auth()
    const user = await getUser(session?.user.id)


    return (
    <div className="flex justify-around w-screen h-24 items-center border-black z-50 overflow-4 fixed bg-white">
        <div >
        <Link href={"/"} className="text-3xl font-bold" ><Image src={"/logo.png"} alt="" width={130} height={130}/></Link>
        </div>
        <div>        
            <SearchBar/>
        </div>
        <div className=" w-44 flex justify-between gap-12">
        <Link href={`/profile/${user?.id}`} className="flex flex-col items-center hover:underline">
            <PiUserThin size={30}/>
            <p className="text-sm">Profile</p>
        </Link>
        <Cart/>
        {session?.user ? (
            <form action={handleLogout}>
            <button className="flex flex-col items-center hover:underline">
                <IoIosLogOut size={25}/>
                <p className="text-sm">Logout</p>
            </button>
            </form>
        ) :
        (<Link href={"/login"} className="flex flex-col items-center hover:underline">
            <IoIosLogIn size={30}/>
            <p className="text-sm">Login</p>
        </Link>)}
        
        </div>
    </div>
  )
}

export default Navbar