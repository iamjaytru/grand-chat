import Image from "next/image";
import React from "react";
import { LogOut } from "lucide-react";
import UserProfile from "./user-profile";
import Navigation from "./navigation";
import { links } from "@/lib/dummy";

type Props = {
  
};

const SideBar = (props: Props) => {
  return (
    <div className="flex flex-col w-24 h-screen bg-[#d9d9d9] p-2">
      {/* Logo */}
      <div className="flex items-center justify-center mb-4">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={30}
          height={30}
          className="w-10 h-10"
        />
      </div>

      {/* Navigation Items */}
      <Navigation links={links}/>

      {/* User Profile and Logout */}
      <div className="flex flex-col items-center justify-center p-8 mt-20">
        <UserProfile img="/images/user2.svg" />
        <button className="flex flex-col items-center gap-2 mt-4 hover:bg-gray-200 rounded-lg p-2 transition-all cursor-pointer">
          <LogOut className="text-[#e21515] w-6 h-6" />
          <p className="text-center text-black text-base font-medium">Logout</p>
        </button>
      </div>
    </div>
  );
};

export default SideBar;