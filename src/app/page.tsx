import React from "react";
import SideBar from "../components/side-bar";
import ChatBody from "../components/chat-list";
import ChatHeader from "../components/chat-header";
import ChatInput from "../components/chat-input";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="flex h-screen">
      <SideBar />
        <ChatBody />
      {/* Add your chat components here */}
      <div className="flex flex-col items-center justify-between flex-1">  
        <ChatHeader />
        <ChatInput />
      </div>
    </div>
  );
};  

export default HomePage;
