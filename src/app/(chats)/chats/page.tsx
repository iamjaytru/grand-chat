import ChatHeader from "@/components/chat-header";
import ChatInput from "@/components/chat-input";
import ChatList from "@/components/chat-list";
import React from "react";

type Props = {};

const RoomPage = (props: Props) => {
  return (
    <>
      {/* Add your chat components here */}
      <div className="flex h-screen">
       
        <ChatList type='users' />
      </div>
      <div className="flex flex-col items-center justify-between flex-1">
      <ChatHeader name="Bob" status="Online" />
        <ChatInput />
      </div>
    </>
  );
};

export default RoomPage;
