import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/card";
import { Button } from "@/components/button";
import { Switch } from "@/components/switch";
import Link from "next/link";
import SocialButton from "./social-button";
import Image from "next/image";

type Props = {};

const SignIn = (props: Props) => {
  return (
    <Card className="flex-1 h-screen bg-background relative overflow-hidden grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side (Form Section) */}
      <div className="flex flex-col items-start justify-center p-6 lg:p-12 relative z-10 max-h-screen">
        {/* Background Circle */}
        <div className="w-40 h-40 bg-[#333333] rounded-full absolute -top-20 -left-20 transform z-0" />

        {/* Header */}
        <CardHeader className="mb-2">
          <CardTitle className="text-foreground text-2xl font-semibold font-['Lato']">
            Sign In
          </CardTitle>
          <CardDescription className="text-foreground text-lg font-medium font-['Montserrat'] mt-2">
            Enter your details to access your account
          </CardDescription>
        </CardHeader>

        {/* Form Inputs */}
        <CardContent className="w-full space-y-4 flex flex-col items-center">
          <form className="w-full flex flex-col gap-2">
            {/* Email Input */}
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-2 rounded-lg border border-foreground/90 text-foreground/25 text-lg font-medium font-['Montserrat']"
            />

            {/* Password Input */}
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 rounded-lg border border-foreground/90 text-foreground/25 text-lg font-medium font-['Montserrat']"
            />

            {/* Forgot Password */}
            <div className="text-right w-full">
              <Link
                href="#"
                className="text-foreground text-sm font-medium font-['Montserrat'] hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Keep Me Signed In */}
            <div className="flex items-center gap-3">
              <Switch />
              <p className="text-foreground text-md font-medium font-['Montserrat']">
                Keep me signed in
              </p>
            </div>
          </form>

          {/* Sign In Button */}
          <Button className="w-full px-4 py-2 rounded-lg shadow-md border border-foreground text-foreground text-lg font-medium font-['Montserrat']">
            Sign In
          </Button>

          {/* OR Divider */}
          <div className="flex items-center gap-3 w-full">
            <hr className="flex-1 border border-foreground/50" />
            <p className="text-foreground text-lg font-medium font-['Montserrat']">OR</p>
            <hr className="flex-1 border border-foreground/50" />
          </div>

          {/* Social Buttons */}
          <div className="flex items-center justify-center gap-2">
            <SocialButton>
              <Image src="/google.svg" alt="Google Logo" width={20} height={20} />
            </SocialButton>
            <SocialButton>
              <Image src="/facebook.svg" alt="Facebook Logo" width={20} height={20} />
            </SocialButton>
            <SocialButton>
              <Image src="/apple.svg" alt="Apple Logo" width={20} height={20} />
            </SocialButton>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-foreground text-lg font-medium font-['Montserrat']">
              Don’t have an account? <Link href="/register" className="underline">Sign Up</Link>
            </p>
          </div>
        </CardContent>
      </div>

      {/* Right Side (Background Section) */}
      <div className="relative hidden lg:block max-h-screen">
        {/* Background Circle */}
        <div className="w-40 h-40 bg-[#333333] rounded-full absolute -bottom-20 right-[calc(88%)] z-0" />

        {/* Gray Background */}
        <div className="w-full h-full bg-[#d9d9d9] rounded-tl-[50px] absolute inset-0 " />
      </div>
    </Card>
  );
};

export default SignIn;
