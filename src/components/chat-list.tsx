"use client";

import Image from "next/image";
import React from "react";
import ChatCard from "./chat-card";
import RoomCard from "./room-card";
import SearchBar from "./search-bar";
import { usePathname } from "next/navigation";
import { links } from "@/lib/dummy";
import UserProfile from "./user-profile";
import { CirclePlus } from "lucide-react";

type Props = {
  type: "users" | "rooms";
};

const ChatList = ({ type }: Props) => {
  const Users = [
    {
      avatar: "/images/user.svg",
      id: "1",
      name: "John Doe",
      message: "Hello, world!",
    },
    {
      avatar: "/images/user.svg",
      id: "2",
      name: "Jane Doe",
      message: "It's Nice meeting up with you today.",
    },
    {
      avatar: "/images/user.svg",
      id: "3",
      name: "Alice",
      message: "How are you?",
    },
    {
      avatar: "/images/user.svg",
      id: "4",
      name: "Bob",
      message: "I'm doing great, thanks!",
    },
    {
      avatar: "/images/user.svg",
      id: "5",
      name: "Charlie",
      message: "Excited to join this chat!",
    },
  ];

  const Rooms = [
    { id: "101", name: "General Chat", members: 10 },
    { id: "102", name: "Tech Talk", members: 25 },
    { id: "103", name: "Gaming Lounge", members: 15 },
    { id: "104", name: "Movies Night", members: 8 },
    { id: "105", name: "Cooking Show", members: 12 },
  ];

  const pathname = usePathname();
  const currentLink = links.find((link) => link.href === pathname);

  return (
    <div className="p-4 sm:p-8 shadow-md w-full min-w-[385px] h-screen overflow-y-auto">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl sm:text-2xl font-bold text-foreground">
          {currentLink?.title}
        </h1>

        <button className="p-2 hover:bg-gray-200 rounded-full transition-all">
          <Image src="/images/edit.svg" alt="Edit" width={24} height={24} />
        </button>
      </div>

      {/* Search Input */}
      <SearchBar />

      {/* Show button if type is "rooms" */}
      {type === "rooms" ? (
        <button className="px-2.5 py-5 justify-center items-center gap-4 flex">
          <CirclePlus />
          Create New Room
        </button>
      ) : (
        Users.map((user) => (
          <div className="inline-flex px-2 justify-start items-center gap-5 my-4">
            <UserProfile key={user.id} img={user.avatar} />
          </div>
        ))
      )}

      {/* User Profiles OR Room List */}
      <div className="flex flex-col gap-4 mt-4">
        {type === "users"
          ? Users.map((user) => (
              <ChatCard key={user.id} name={user.name} message={user.message} />
            ))
          : Rooms.map((room) => (
              <RoomCard key={room.id} name={room.name} members={room.members} />
            ))}
      </div>
    </div>
  );
};

export default ChatList;
