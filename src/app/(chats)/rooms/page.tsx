import ChatHeader from "@/components/chat-header";
import ChatInput from "@/components/chat-input";
import ChatList from "@/components/chat-list";
import React from "react";

type Props = {};

const RoomPage = (props: Props) => {
  // Replace 'rooms' with your actual data source
  const room = {};

  return (
    <>
      {/* Add your chat components here */}
      <div className="flex h-screen">
        <ChatList type="rooms" />
      </div>
      <div className="flex flex-col items-center justify-between flex-1">
        <ChatHeader name="General Chat" status="3 Members active"/>
        <ChatInput />
      </div>
    </>
  );
};

export default RoomPage;
