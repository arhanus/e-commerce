import React from "react";
import Image from "next/image";
import { getUser } from "@/lib/userActions";
const Profile = async ({ params }) => {
  const { slug } = params;
  const user = await getUser(slug);
  console.log(user);

  return (
    <div className="max-w-screen h-screen flex justify-center bg-slate-100 items-center overflow-hidden">
      <div className="flex justify-center items-start w-2/4 bg-white relative h-600 pt-8 pb-8 rounded-xl shadow-md">
        <div className="flex flex-col border-r-2 h-full w-500 items-center gap-10">
          <div className=" w-52 h-52 relative">
            <Image
              src={"/avatar.jpg"}
              fill
              alt=""
              className="object-contain rounded-full"
            />
          </div>
          <div className="flex flex-col items-start gap-5">
            <h2 className="flex justify-start">
              <b>E-Mail:</b>
              {user?.email}
            </h2>
            <h2 className="flex justify-start">
              <b>Username:</b>
              {user?.username}
            </h2>
            <h2>
              <b>Joined at:</b>
              {user?.createdAt.toString().slice(0, 15)}
            </h2>
          </div>
        </div>
        <div className="h-full w-full">
          <h1 className="flex justify-center text-2xl font-semibold">
            Recent Orders
          </h1>
          <div className="h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
