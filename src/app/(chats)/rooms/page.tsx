import ChatBody from "@/app/components/chat-body";
import ChatHeader from "@/app/components/chat-header";
import ChatInput from "@/app/components/chat-input";
import React from "react";

type Props = {};

const RoomPage = (props: Props) => {
  return (
    <>
      {/* Add your chat components here */}
      <div className="flex flex-col items-center justify-between flex-1">
        <ChatHeader />
        <ChatInput />
      </div>
    </>
  );
};

export default RoomPage;
