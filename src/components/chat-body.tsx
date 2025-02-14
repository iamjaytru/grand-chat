import React from 'react'
import UserProfile from './user-profile';
import ChatCard from './chat-card';

type Props = {
  users: { avatar: string; id: string; name: string; message: string }[];
};

const ChatBody = ({ users }: Props) => {
  return (
    <div>
      {/* User Profile */}
      <div className="flex gap-2 my-4">
        {users.map((user) => (
          <UserProfile key={user.id} img={user.avatar} />
        ))}
      </div>

      {/* Chats Section */}
      <div className="flex flex-col gap-4">
        {users.map((user) => (
          <ChatCard key={user.id} name={user.name} message={user.message} />
        ))}
      </div>
    </div>
  );
};

export default ChatBody;
