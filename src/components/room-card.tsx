import React from "react";
import UserProfile from "./user-profile";
import Link from "next/link";

type Props = {
  name: string;
  members: number;
};

const RoomCard = ({ name, members }: Props) => {
  return (
    <Link
      href="#"
      className="flex items-center gap-4 border-t border-foreground/25 w-full h-[60px] p-2 sm:p-4 transition-all cursor-pointer"
    >
      {/* Room Avatar */}
      <div className="w-6 h-6 bg-[#d9d9d9] rounded-full flex items-center justify-center">
        <UserProfile img="/images/team.svg" />
      </div>

      {/* Room Info */}
      <div className="flex flex-col flex-1 gap-1">
        {/* Room Name */}
        <h1 className="text-foreground text-sm sm:text-base font-semibold font-lato truncate">
          {name}
        </h1>

        {/* Members Count */}
        <p className="text-foreground/50 text-xs sm:text-sm">
          {members} {members === 1 ? "member" : "members"}
        </p>
      </div>
    </Link>
  );
};

export default RoomCard;
