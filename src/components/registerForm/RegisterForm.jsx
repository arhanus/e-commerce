"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { register } from "@/lib/userActions";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";

const RegisterForm = () => {
  const router = useRouter();
  const [state, formAction] = useFormState(register, undefined);
  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    
      <form
        action={formAction}
        className="flex flex-col gap-5 w-96 rounded-3xl border-2 border-slate-200 pb-32 pt-16 px-10 box-content shadow-2xl"
      >
        <h1 className=" text-2xl font-semibold relative m-auto">Register</h1>
        <input
          type="email"
          name="email"
          placeholder="E-Mail"
          className="px-2 object-contain h-12 border-2 border-black rounded-md outline-none"
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="px-2 object-contain h-12 border-2 border-black rounded-md outline-none"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="px-2 object-contain h-12 border-2 border-black rounded-md outline-none"
        />
        <input
          type="password"
          name="passwordAgain"
          placeholder="Password Again"
          className="px-2 object-contain h-12 border-2 border-black rounded-md outline-none"
        />
        <button className="object-contain bg-black text-white h-12 rounded-full border-2 border-black duration-300 hover:bg-white hover:text-black">
          Register
        </button>
        <div className=" text-red-600 relative m-auto">{state?.error}</div>
        <Link href="/login" className="text-blue-800 relative m-auto">
          Already have an account? <b>Login</b>
        </Link>
      </form>
    
  );
};

export default RegisterForm;
