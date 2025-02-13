"use client";

import React, { useRef, useState } from "react";
import { Smile, Paperclip, Send, MoreVertical, Edit, Trash2, Copy } from "lucide-react";

const ChatInput = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [menuIndex, setMenuIndex] = useState<number | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null); 

  const handleSendMessage = () => {
    if (!message.trim()) return;

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

    setMessage(""); // Clear input
  };

  const handleLongPressEdit = (msg: string, index: number, event: React.MouseEvent) => {
    event.preventDefault(); 
    setMessage(msg); // Move the message to input
    setEditingIndex(index); // Store index to replace on send
  };


  const handleAttachFile = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("File selected:", file.name);
      // TODO: Implement file upload logic
    }
  };

  const handleEmojiClick = () => {
    console.log("Emoji picker clicked!");
    // TODO: Open an emoji picker component
  };

  const handleRightClick = (index: number, event: React.MouseEvent) => {
    event.preventDefault(); // Prevent default right-click menu
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
    alert("Message copied!"); // You can replace this with a toast notification
    setMenuIndex(null); // Close menu
  };


  const handleMessageClick = (clickedMessage: string) => {
    setMessage(clickedMessage); // Set the clicked message into the input field
  };

  return (
    <div className="flex flex-col mb-6">
    {/* Message Display */}
    <div className="mb-4 p-4 bg-white rounded-lg h-[500px] overflow-y-auto">
      {messages.map((msg, index) => (
        <div key={index} className="relative group mb-2 p-2 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-200 transition-all">
          {/* Message Text */}
          <p onContextMenu={(event) => handleRightClick(index, event)}>{msg}</p>

          {/* More Options Button */}
          <button onClick={(event) => handleRightClick(index, event)} className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <MoreVertical className="w-4 h-4" />
          </button>

          {/* Dropdown Menu */}
          {menuIndex === index && (
            <div className="absolute right-6 top-6 bg-white shadow-lg rounded-lg p-2 z-10">
              <button className="flex items-center gap-2 px-3 py-1 text-sm hover:bg-gray-200 w-full text-left" onClick={() => handleEditMessage(index)}>
                <Edit className="w-4 h-4" /> Edit
              </button>
              <button className="flex items-center gap-2 px-3 py-1 text-sm hover:bg-gray-200 w-full text-left" onClick={() => handleDeleteMessage(index)}>
                <Trash2 className="w-4 h-4" /> Delete
              </button>
              <button className="flex items-center gap-2 px-3 py-1 text-sm hover:bg-gray-200 w-full text-left" onClick={() => handleCopyMessage(msg)}>
                <Copy className="w-4 h-4" /> Copy
              </button>
            </div>
          )}
        </div>
      ))}
    </div>

      {/* Input and Send Button Container */}
      <div className="flex">
        {/* Focusable Outer Container */}
        <div className="w-full min-w-[700px] h-[40px] px-4 py-2.5 bg-white rounded-tl-[15px] rounded-bl-[15px] shadow-md flex items-center justify-between border border-transparent focus-within:border-foreground/50 focus-within:ring-2/25 focus-within:ring-foreground/25 transition-all">
          <input
            type="text"
            placeholder="Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 px-4 py-2 text-sm text-foreground font-normal rounded-full outline-none"
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
