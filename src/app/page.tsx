import React from "react";
import SideBar from "@/components/side-bar";
import ChatHeader from "@/components/chat-header";
import ChatInput from "@/components/chat-input";
import ChatList from "@/components/chat-list";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <ChatList type="users"/>

      {/* Add your chat components here */}
      <div className="flex flex-col items-center justify-between flex-1">
        <ChatHeader name="Bob" status="Online" />

        <ChatInput />
      </div>
    </div>
  );
};

export default HomePage;
