"use client";

import React, { useState } from "react";
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic Validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    // Clear error if any
    setError("");

    console.log(
      "First Name:",
      firstName,
      "Last Name:",
      lastName,
      "Email:",
      email,
      "Password:",
      password,
      "Keep Signed In:",
      keepSignedIn
    );
    // Add your sign-up logic here
  };

  return (
    <Card className="flex-1 h-screen bg-background relative overflow-hidden grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side (Form Section) */}
      <div className="flex flex-col items-start justify-center p-6 lg:p-12 relative z-10 max-h-screen order-2">
        {/* Background Circle */}
        <div className="w-40 h-40 bg-[#333333] rounded-full absolute -top-20 -right-20 transform z-0" />

        {/* Header */}
        <CardHeader className="mb-2">
          <CardTitle className="text-foreground text-[28px] md:text-2xl font-medium md:font-semibold text-center md:text-left">
            Sign Up
          </CardTitle>
          <CardDescription className="text-foreground/85 text-[14px] md:text-lg font-medium mt-2 text-center md:text-left">
            Create your account to get started
          </CardDescription>
        </CardHeader>

        {/* Form Inputs */}
        <CardContent className="w-full space-y-4 flex flex-col items-center">
          {/* Moved the button INSIDE the form for native form submission */}
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="md:flex md:gap-2">
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-foreground/90 text-foreground/25 text-lg font-medium font-['Montserrat'] placeholder:text-sm md:placeholder:text-lg"
              />

              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-foreground/90 text-foreground/25 text-lg font-medium font-['Montserrat'] placeholder:text-sm md:placeholder:text-lg"
              />
            </div>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-foreground/90 text-foreground/25 text-lg font-medium font-['Montserrat'] placeholder:text-sm md:placeholder:text-lg"
            />

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-foreground/90 text-foreground/25 text-lg font-medium font-['Montserrat'] placeholder:text-sm md:placeholder:text-lg"
            />
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-foreground/90 text-foreground/25 text-lg font-medium font-['Montserrat'] placeholder:text-sm md:placeholder:text-lg"
            />

            {/* Keep Signed In Toggle */}
            <div className="flex items-center gap-2 mt-4">
              <Switch
                checked={keepSignedIn}
                onCheckedChange={setKeepSignedIn}
                className="mr-2"
              />
              <span className="text-foreground text-sm md:text-base font-medium font-['Montserrat']">
                Keep me signed in
              </span>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <p className="text-foreground text-sm font-medium font-['Montserrat']">
                By signing up, you agree to our{" "}
                <Link href="/terms" className="underline hover:text-foreground">
                  Terms and Conditions
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="underline hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>

            {/* Sign Up Button */}
            <Button
              type="submit"
              className="w-full px-4 py-2 rounded-lg shadow-md border border-foreground text-foreground text-lg font-medium font-['Montserrat'] mt-4"
            >
              Sign Up
            </Button>
          </form>

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
              <Image
                src="/images/apple.svg"
                alt="Apple Logo"
                width={20}
                height={20}
              />
            </SocialButton>
          </div>

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-foreground text-sm md:text-base font-medium font-['Montserrat']">
              Already have an account?{" "}
              <Link href="/login" className="underline">
                Sign In
              </Link>
            </p>
          </div>
        </CardContent>
      </div>

      {/* Right Side (Background Section) */}
      <div className="w-40 h-40 bg-[#333333] rounded-full absolute -bottom-20 -left-20 z-0" />
      <div className="relative hidden lg:block max-h-screen">
        <div className="w-40 h-40 bg-[#333333] rounded-full absolute -bottom-20 -right-20 z-0" />
        <div className="w-full h-full bg-[#d9d9d9] rounded-tr-[50px] absolute inset-0 order-1" />
      </div>
    </Card>
  );
};

export default SignUp;
