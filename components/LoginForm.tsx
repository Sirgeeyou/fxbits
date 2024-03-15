"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/signup-form";
import { cn } from "@/utils/cn";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoginFormSchema } from "@/lib/validations";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "./ui/shad-form";
import { useRouter } from "next/navigation";
import { LoaderIcon } from "lucide-react";
import { useToast } from "./ui/use-toast";

export function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();

  // 1. Define the form
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "test@email.com",
      password: "",
    },
  });
  const isLoading = form.formState.isLoading;

  // 2. Define a submit handler
  async function onSubmit(values: z.infer<typeof LoginFormSchema>) {
    try {
      console.log("form submitted");
      const response = await fetch("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log("API request successful");
        // Use the router to navigate to a different page
        router.push("/"); // Replace with your desired URL
        toast({
          variant: "success",
          description: "You have successfuly logged in.",
        });
      } else {
        console.error("API request failed:", await response.text());
        // Handle errors, show a message, etc.
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Invalid login credentials.",
        });
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast({
        title: "An unexpected error has occured",
        description: "Please try again later.",
      });
    }
  }
  return (
    <div className="mx-auto w-full max-w-md rounded-none bg-white p-4 shadow-input dark:bg-black md:rounded-2xl md:p-8">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Welcome to Aceternity
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Login to aceternity if you can because we don&apos;t have a login flow
        yet
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="py-8"
          action="/auth/signup"
          method="post"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <FormControl>
                      <Input
                        {...field}
                        id="email"
                        placeholder="projectmayhem@fc.com"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </LabelInputContainer>
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Password</Label>
                    <FormControl>
                      <Input
                        {...field}
                        id="password"
                        placeholder="password"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </LabelInputContainer>
                </FormItem>
              );
            }}
          />

          <button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            {isLoading ? <LoaderIcon className="animate-spin" /> : "Login →"}
            <BottomGradient />
          </button>
        </form>
      </Form>
    </div>
  );
}

export const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
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
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
