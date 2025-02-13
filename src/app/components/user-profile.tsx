import Image from "next/image";
import React from "react";

type Props = {
    img: string;
};

const UserProfile = (props: Props) => {
  return (
    <div>
      <Image
        src={props.img}
        alt="User"
        width={48}
        height={48}
        className="w-12 h-12 rounded-full"
      />
    </div>
  );
};

export default UserProfile;
