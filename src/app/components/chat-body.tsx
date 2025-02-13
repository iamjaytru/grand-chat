"use client"

import Image from "next/image";
import React from "react";
import ChatCard from "./chat-card";
import SearchBar from "./search-bar";
import UserProfile from "./user-profile";
import { usePathname } from "next/navigation";
import { links } from "@/lib/dummy";

type Props = {};

const ChatList = (props: Props) => {

  const chatMessages = [
    { name: "John Doe", message: "Hello, world!" },
    { name: "Jane Doe", message: "Lorem ipsum dolor sit amet." },
    { name: "John Doe", message: "How are you?" },
    { name: "Jane Doe", message: "I'm doing great, thanks!" },
    { name: "Alice", message: "Excited to join this chat!" },
  ];

  const pathname = usePathname()
  const currentLink = links.filter((link)=> link.href === pathname)[0]
  console.log(currentLink);
  
  return (
    <div className="p-8 shadow-md w-[30%] h-screen">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4 ">
        <h1 className="text-2xl font-bold text-foreground">{currentLink.title}</h1>
        <button className="p-2 hover:bg-gray-200 rounded-full transition-all">
          <Image
            src="/images/edit.svg"
            alt="Edit"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Search Input */}
      <SearchBar />

      {/* User Profile */}
      <div className="flex gap-4 my-8">
        <UserProfile img="/images/user.svg" />
        <UserProfile img="/images/user.svg" />
        <UserProfile img="/images/user.svg" />
      </div>

      {/* Chats Section */}
      <div className="flex flex-col gap-4">
      {chatMessages.map((chat, index) => (
        <ChatCard key={index} name={chat.name} message={chat.message} />
      ))}
    </div>
    </div>
  );
};

export default ChatList;
