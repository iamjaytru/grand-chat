import React from "react";
import SideBar from "@/components/side-bar";
import ChatList from "@/components/chat-list";

type Props = {
    children: React.ReactNode;
};

const HomePage = ({children}: Props) => {
  return (
    <div className="flex h-screen">
      <SideBar />
      {/* <ChatList /> */}
       {children}
    </div>
  );
};

export default HomePage;
