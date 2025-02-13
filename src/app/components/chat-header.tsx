import { EllipsisVertical, Phone } from "lucide-react";
import React from "react";

type Props = {};

const ChatHeader = (props: Props) => {
  return (
    <div className="bg-[#EAEAEA] flex items-center justify-between px-4 py-6 h-[60px] w-full shadow-md">
      {/* User Info */}
      <div className="flex flex-col justify-center">
        <h1 className="text-foreground font-bold text-lg font-lato">Name</h1>
        <p className="text-foreground text-sm font-medium font-lato">Online</p>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4">
        <Phone className="cursor-pointer text-foreground text-sm" />
        <EllipsisVertical className="cursor-pointer text-foreground text-sm" />
      </div>
    </div>
  );
};

export default ChatHeader;
