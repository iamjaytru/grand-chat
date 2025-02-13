"use client";

import { LinkType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  links: LinkType[];
};

const Navigation = ({ links }: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-1 text-foreground text-sm font-medium mt-20">
      {links?.map((link: LinkType) => (
        <NavLink key={link.id} {...link} />
      ))}
    </div>
  );
};

export default Navigation;

const NavLink = ({ href, id, image, title }: LinkType) => {
  const isActive = href === usePathname();

  return (
    <Link
      href={href}
      className={`${isActive?"bg-white":""} flex flex-col items-center hover:bg-gray-200 rounded-lg p-2 transition-all cursor-pointer`}
    >
      <Image
        src={image}
        alt={title}
        width={25}
        height={25}
      />
      <p>{title}</p>
    </Link>
  );
};
