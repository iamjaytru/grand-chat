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

const SignUp = (props: Props) => {
  return (
    <Card className="flex-1 h-screen bg-background relative overflow-hidden grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side (Form Section) */}
      <div className="flex flex-col items-start justify-center p-6 lg:p-12 relative z-10 max-h-screen order-2">
        {/* Background Circle */}
        <div className="w-40 h-40 bg-[#333333] rounded-full absolute -top-20 -right-20 transform z-0" />

        {/* Header */}
        <CardHeader className="mb-2">
          <CardTitle className="text-foreground text-2xl font-semibold font-['Lato']">
            Sign Up
          </CardTitle>
          <CardDescription className="text-foreground text-lg font-medium font-['Montserrat'] mt-2">
            Create an account to get Started
          </CardDescription>
        </CardHeader>

        {/* Form Inputs */}
        <CardContent className="w-full space-y-4 flex flex-col items-center">
          <form className="w-full flex flex-col gap-2">
            <div className="flex gap-2">
              <input
                id="first Name"
                name="first Name"
                type="first Name"
                placeholder="First Name"
                required
                className="w-full px-4 py-2 rounded-lg border border-foreground/90 text-foreground/25 text-lg font-medium font-['Montserrat']"
              />

              {/* Password Input */}
              <input
                id="last Name"
                name="last Name"
                type="last Name"
                placeholder="Last Name"
                required
                className="w-full px-4 py-2 rounded-lg border border-foreground/90 text-foreground/25 text-lg font-medium font-['Montserrat']"
              />
            </div>

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
            <input
              id="confirm-password"
              name="confirm-password"
              type="confirm-password"
              placeholder="confirm-Password"
              required
              className="w-full px-4 py-2 rounded-lg border border-foreground/90 text-foreground/25 text-lg font-medium font-['Montserrat']"
            />

            {/* Terms and Conditions */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <p className="text-foreground text-sm font-medium font-['Montserrat']">
                By signing up, you agree to our{" "}
                <Link href="/terms" className="underline hover:text-foreground">
                  Terms and Conditions
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="underline hover:text-foreground">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </form>

          {/* Sign In Button */}
          <Button className="w-full px-4 py-2 rounded-lg shadow-md border border-foreground text-foreground text-lg font-medium font-['Montserrat']">
            Sign Up
          </Button>

          {/* OR Divider */}
          <div className="flex items-center gap-3 w-full">
            <hr className="flex-1 border border-foreground/50" />
            <p className="text-foreground text-sm font-medium font-['Montserrat']">
              OR
            </p>
            <hr className="flex-1 border border-foreground/50" />
          </div>

          {/* Social Buttons */}
          <div className="flex items-center justify-center gap-2">
            <SocialButton>
              <Image
                src="/images/google.svg"
                alt="Google Logo"
                width={20}
                height={20}
              />
            </SocialButton>
            <SocialButton>
              <Image
                src="/images/facebook.svg"
                alt="Facebook Logo"
                width={20}
                height={20}
              />
            </SocialButton>
            <SocialButton>
              <Image src="/images/apple.svg" alt="Apple Logo" width={20} height={20} />
            </SocialButton>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-foreground text-lg font-medium font-['Montserrat']">
              Already have an account?{" "}
              <Link href="/login" className="underline">
                Sign In
              </Link>
            </p>
          </div>
        </CardContent>
      </div>

      {/* Right Side (Background Section) */}
      <div className="relative hidden lg:block max-h-screen">
        {/* Background Circle */}
        <div className="w-40 h-40 bg-[#333333] rounded-full absolute -bottom-20 -right-20 z-0" />

        {/* Gray Background */}
        <div className="w-full h-full bg-[#d9d9d9] rounded-tr-[50px] absolute inset-0 order-1" />
      </div>
    </Card>
  );
};

export default SignUp;
