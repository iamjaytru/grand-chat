import React from "react";
import SideBar from "@/app/components/side-bar";
import ChatBody from "@/app/components/chat-body";
import ChatHeader from "@/app/components/chat-header";
import ChatInput from "@/app/components/chat-input";

type Props = {
    children: React.ReactNode;
};

const HomePage = ({children}: Props) => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <ChatBody />
       {children}
    </div>
  );
};

export default HomePage;
