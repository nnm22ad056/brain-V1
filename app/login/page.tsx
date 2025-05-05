"use client";
import React from "react";
import Navbar from "@/components/ui/navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

export default function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <h1 className="mb-6 text-5xl font-semibold text-neutral-800 dark:text-neutral-100">
      <Link href="/">
    br
    <span className="text-[#00be77]">AI</span>
    n
  </Link>
      </h1>

      <div className="shadow-input w-full max-w-md rounded-none border-t border-b border-white/20 border-b-white/5 p-4 md:rounded-2xl md:p-8 bg-gradient-to-tr from-[#0c0e14] via-[#0f1218] to-[#13171e]">
        <h2 className="text-center text-xl font-bold text-neutral-800 dark:text-neutral-200">
          Welcome back
        </h2>
        <p className="text-center mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Log in to detect brain tumors in seconds with brAIn.
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="••••••••" type="password" />
          </LabelInputContainer>


          <button
            className="cursor-pointer group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            type="submit"
          >
           Log in &rarr;
            <BottomGradient />
          </button>

          <div className="mt-4 text-center text-sm text-neutral-600 dark:text-neutral-400">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-medium hover:underline text-[#00be77]"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-[#00be77] to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-[#00be77] to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
