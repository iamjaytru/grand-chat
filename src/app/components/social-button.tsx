"use client";

import { Button } from "@/app/components/button";
type Props = {
  children: React.ReactNode;
};

const SocialButton = ({ children }: Props) => {
  return (
    <Button
      type="button"
    >
      {children}
    </Button>
  );
};

export default SocialButton;