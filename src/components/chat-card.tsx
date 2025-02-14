import React from "react";
import UserProfile from "./user-profile";
import Link from "next/link";

type Props = {
  name: string;
  message: string;
};

const ChatCard = ({ name, message }: Props) => {
  return (
    <Link href='#' className="flex items-center gap-4 border-t border-foreground/25 w-full h-[60px] p-2 sm:p-4">
      {/* User Avatar */}
      <div className="w-10 h-10 sm:w-12 sm:h-12">
        <UserProfile img="/images/user.svg" />
      </div>

      {/* User Info */}
      <div className="flex flex-col flex-1 gap-1">
        {/* Name */}
        <h1 className="text-black text-sm sm:text-base font-semibold font-lato truncate">
          {name}
        </h1>

        {/* Message */}
        <p className="text-black text-xs sm:text-sm font-normal font-lato truncate">
          {message}
        </p>
      </div>
    </Link>
  );
};

export default ChatCard;