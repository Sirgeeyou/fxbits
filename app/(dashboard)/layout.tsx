// import { Inter } from "next/font/google";
import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Navbar from "@/components/Navbar";

// const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "WorldWideRental Network",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createServerComponentClient({ cookies });
  const { data: user } = await supabase.auth.getUser();

  return (
    <div className="bg-background pb-10">
      <Navbar user={user} />
      {children}
    </div>
  );
}
