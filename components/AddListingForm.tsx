"use client";
import React, { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/signup-form";
import { cn } from "@/utils/cn";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AddListingSchema } from "@/lib/validations";
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
import { supabase } from "@/lib/supabase";
import { User } from "@/types/types";

export function AddListingForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [userId, setUserId] = useState<User>();

  // 1. Define the form
  const form = useForm<z.infer<typeof AddListingSchema>>({
    resolver: zodResolver(AddListingSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });
  const isLoading = form.formState.isLoading;

  useEffect(function () {
    async function getUserId() {
      const userResponse = await supabase.auth.getUser();
      const userId = userResponse.data;
      setUserId(userId);
      console.log("User id:", userId);
    }
    getUserId();
  }, []);

  // Handle file input change
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedFile(file);
      console.log(file.size);
    }
  };

  // 2. Define a submit handler
  async function onSubmit() {
    if (userId && userId.user?.id && selectedFile) {
      try {
        const randomUUID = crypto.randomUUID();
        const { data, error } = await supabase.storage
          .from("listing-images")
          .upload(
            userId.user.id + "/" + randomUUID + "/" + selectedFile?.name,
            selectedFile
          );

        if (error) {
          console.log(error);
        }
        if (data) {
          console.log(data);
        }
      } catch (error) {
        console.error("An error occurred:", error);
        toast({
          title: "An unexpected error has occured",
          description: "Please try again later.",
        });
      }
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="py-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => {
              return (
                <FormItem>
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="title">Title</Label>
                    <FormControl>
                      <Input
                        {...field}
                        id="title"
                        placeholder="Enter a title"
                        type="text"
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
            name="description"
            render={({ field }) => {
              return (
                <FormItem>
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="description">Description</Label>
                    <FormControl>
                      <Input
                        {...field}
                        id="description"
                        placeholder="Enter a description"
                        type="text"
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
            name="image"
            render={({ field }) => {
              return (
                <FormItem>
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="image">Image</Label>
                    <FormControl>
                      <Input
                        {...field}
                        id="image"
                        placeholder="image"
                        type="file"
                        onChange={handleFileChange}
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
            {isLoading ? <LoaderIcon className="animate-spin" /> : "Upload →"}
          </button>
          <BottomGradient />
        </form>
      </Form>
    </div>
  );
}

const BottomGradient = () => {
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
