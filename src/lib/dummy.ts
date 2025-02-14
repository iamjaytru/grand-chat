import { LinkType, MessageType, UserType } from "./types";

export const links: LinkType[] = [
    {
        href: "/chats",
        id: "chats",
        image: "images/chat.svg",
        title: "Chats"
    },
    {
        href: "/rooms",
        id: "rooms",
        image: "images/team.svg",
        title: "Rooms"
    },
    {
        href: "/voice",
        id: "voice",
        image: "images/phone.svg",
        title: "Voice call"
    },
    {
        href: "/notification",
        id: "notification",
        image: "images/notification.svg",
        title: "Notification"
    },
   
]

export const messages: MessageType[] = [
    
]

export const users: UserType[] = [
   {
    avatar: '/images/user.svg',
    id: '1',
    // name: 'John Doe',
    // last_seen: '15 minutes ago',
    // status: 'online',
    // is_online: true,
   }
]    