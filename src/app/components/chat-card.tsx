import React from "react";
import UserProfile from "./user-profile";

type Props = {
  name: string;
  message: string;
};

const ChatCard = ({ name, message }: Props) => {
  return (
    <div className="flex items-center gap-4 border-t border-foreground/25 w-full h-[60px]">
      {/* User Avatar */}
      <UserProfile img="/images/user.svg" />

      {/* User Info */}
      <div className="flex flex-col flex-1 gap-1">
        <h1 className="text-black text-lg font-semibold font-lato">{name}</h1>
        <p className="text-black text-xs font-normal font-lato truncate">{message}</p>
      </div>
    </div>
  );
};

export default ChatCard;
