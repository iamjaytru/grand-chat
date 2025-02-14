"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Smile,
  Paperclip,
  Send,
  MoreVertical,
  Edit,
  Trash2,
  Copy,
} from "lucide-react";
import { toast } from "react-hot-toast";
import { MessageType } from "@/lib/types";
import { v4 } from "uuid";
import UserProfile from "./user-profile";

const ChatInput = () => {
  const [message, setMessage] = useState<MessageType>({
    id: v4(),
    content: "",
    user_id: "",
  });
  const [messages, setMessages] = useState<MessageType[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [menuIndex, setMenuIndex] = useState<number | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleSendMessage = () => {
    if (!message?.content?.trim()) return;

    if (editingIndex !== null) {
      // If in edit mode, update the message instead of adding a new one
      setMessages((prevMessages) =>
        prevMessages.map((msg, index) =>
          index === editingIndex ? message : msg
        )
      );
      setEditingIndex(null); // Exit edit mode
    } else {
      // Add new message
      setMessages((prevMessages) => [...prevMessages, message]);
    }

    setMessage({
      id: v4(),
      content: "",
      user_id: "",
    });
  };

  const handleAttachFile = () => {
    fileInputRef.current?.click();
  };

  const handleEmojiClick = () => {
    console.log("Emoji picker clicked!");
    // TODO: Open an emoji picker component
  };

  const handleRightClick = (index: number, event: React.MouseEvent) => {
    event.preventDefault();
    setMenuIndex(index === menuIndex ? null : index); // Toggle dropdown menu
  };

  const handleEditMessage = (index: number) => {
    setMessage(messages[index]); // Move message to input field
    setEditingIndex(index); // Set index for edit mode
    setMenuIndex(null); // Close menu
  };

  const handleDeleteMessage = (index: number) => {
    setMessages((prevMessages) => prevMessages.filter((_, i) => i !== index));
    setMenuIndex(null); // Close menu
  };

  const handleCopyMessage = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("✅ Copied!");
    setMenuIndex(null); // Close menu
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col mb-6">
      {/* Message Display */}
      <div
        ref={messagesEndRef}
        className="mb-4 p-4 bg-white rounded-lg h-[500px] overflow-y-auto"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className="flex items-end justify-end mb-6" // Align messages to the right
          >
            {/* Message Container */}
            <div className="relative max-w-[75%] w-fit h-auto bg-[#d9d9d9] rounded-tl-[25px] rounded-tr-[25px] rounded-bl-[25px] shadow-sm cursor-pointer hover:bg-gray-200 transition-all">
              {/* Message Text */}
              <p
                className="break-words px-5 py-2"
                onContextMenu={(event) => handleRightClick(index, event)}
              >
                {msg.content}
              </p>


              {/* More Options Button */}
              <button
                onClick={(event) => handleRightClick(index, event)}
                className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <MoreVertical className="w-4 h-4" />
              </button>

              {/* Dropdown Menu */}
              {menuIndex === index && (
                <div className="absolute right-6 top-6 bg-white shadow-lg rounded-lg p-2 z-10">
                  <button
                    className="flex items-center gap-2 px-3 py-1 text-sm hover:bg-gray-200 w-full text-left"
                    onClick={() => handleEditMessage(index)}
                  >
                    <Edit className="w-4 h-4" /> Edit
                  </button>
                  <button
                    className="flex items-center gap-2 px-3 py-1 text-sm hover:bg-gray-200 w-full text-left"
                    onClick={() => handleDeleteMessage(index)}
                  >
                    <Trash2 className="w-4 h-4" /> Delete
                  </button>
                  <button
                    className="flex items-center gap-2 px-3 py-1 text-sm hover:bg-gray-200 w-full text-left"
                    onClick={() => handleCopyMessage(msg.content)}
                  >
                    <Copy className="w-4 h-4" /> Copy
                  </button>
                </div>
              )}
            </div>

            {/* User Profile at the Tail */}
            <div className="ml-2 w-8 h-8 ">
              <UserProfile img="/images/user.svg" />
            </div>
          </div>
        ))}
      </div>

      {/* Input and Send Button Container */}
      <div className="flex">
        {/* Focusable Outer Container */}
        <div className="w-full min-w-[700px] h-[40px] px-4 py-2.5 bg-white rounded-tl-[15px] rounded-bl-[15px] shadow-md flex items-center justify-between border border-transparent focus-within:border-foreground/50 focus-within:ring-2/25 focus-within:ring-foreground/25 transition-all">
          <input
            type="input"
            placeholder="Message..."
            value={message.content}
            onChange={(e) =>
              setMessage((prevMessage) => {
                return {
                  ...prevMessage,
                  content: e.target.value,
                };
              })
            }
            className="flex-1 break-words px-4 py-2 text-sm text-foreground font-normal rounded-full outline-none"
          />

          {/* Icons */}
          <div className="flex items-center gap-2 ml-2">
            <button
              onClick={handleAttachFile}
              className="text-foreground hover:text-foreground/80 transition-all"
            >
              <Paperclip className="w-5 h-5" />
            </button>
            <button
              onClick={handleEmojiClick}
              className="text-foreground hover:text-foreground/80 transition-all"
            >
              <Smile className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Send Button */}
        <button
          onClick={handleSendMessage}
          className="bg-foreground text-white py-2 px-4 rounded-tr-[15px] rounded-br-[15px] text-sm flex items-center justify-center hover:bg-foreground/90 transition-all"
        >
          Send
          <Send className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
