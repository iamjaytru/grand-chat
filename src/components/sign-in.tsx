"use client";

import { useState } from "react";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    console.log(
      "Email:",
      email,
      "Password:",
      password,
      "Keep Signed In:",
      keepSignedIn
    );
    // Add your sign-in logic here
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Logging in with ${provider}`);
    // Add social login logic here
  };

  return (
    <Card className="flex-1 h-screen bg-background relative overflow-hidden grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side (Form Section) */}
      <div className="flex flex-col items-start justify-center p-6 lg:p-12 relative z-10 max-h-screen">
        {/* Background Circle */}
        <div className="w-40 h-40 bg-[#333333] rounded-full absolute -top-20 -left-20 transform z-0" />

        {/* Header */}
        <CardHeader className="mb-2">
          <CardTitle className="text-foreground text-[28px] md:text-2xl font-medium md:font-semibold text-center md:text-left">
            Sign In
          </CardTitle>
          <CardDescription className="text-foreground/85 text-[14px] md:text-lg font-medium mt-2 text-center md:text-left">
            Enter your details to access your account
          </CardDescription>
        </CardHeader>

        {/* Form Inputs */}
        <CardContent className="w-full space-y-4 flex flex-col items-center">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border border-foreground/90 text-foreground/25 text-lg font-medium font-['Montserrat'] placeholder:text-sm md:placeholder:text-lg"
            />
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border border-foreground/90 text-foreground/25 text-lg font-medium font-['Montserrat'] placeholder:text-sm md:placeholder:text-lg"
            />

            <div className="text-right w-full my-2">
              <Link
                href="#"
                className="text-foreground text-[12px] md:text-sm font-medium font-['Montserrat'] hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Switch
                checked={keepSignedIn}
                onCheckedChange={setKeepSignedIn}
              />
              <span className="text-foreground text-sm md:text-base font-medium font-['Montserrat']">
                Keep me signed in
              </span>
            </div>
            <Button
              type="submit"
              className="w-full px-4 py-2 rounded-lg shadow-md border border-foreground text-foreground  text-sm md:text-lg font-medium font-['Montserrat'] hover:bg-foreground/10 focus:ring-2 focus:ring-foreground"
            >
              Sign In
            </Button>
          </form>

          {/* OR Divider */}
          <div className="flex items-center gap-3 w-full">
            <hr className="flex-1 border border-foreground/50" />
            <p className="text-foreground text-sm md:text-lg font-medium font-['Montserrat']">
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
              <Image
                src="/images/apple.svg"
                alt="Apple Logo"
                width={20}
                height={20}
              />
            </SocialButton>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-foreground text-sm md:text-lg font-medium font-['Montserrat']">
              Don’t have an account?{" "}
              <Link href="/register" className="underline">
                Sign Up
              </Link>
            </p>
          </div>
        </CardContent>
      </div>

      {/* Right Side (Background Section) */}
      <div className="w-40 h-40 bg-[#333333] rounded-full absolute -bottom-20 -right-20 z-0" />
      <div className="relative hidden lg:block max-h-screen">
        <div className="w-40 h-40 bg-[#333333] rounded-full absolute -bottom-20 right-[calc(88%)] z-0" />
        <div className="w-full h-full bg-[#d9d9d9] rounded-tl-[50px] absolute inset-0" />
      </div>
    </Card>
  );
};

export default SignIn;
