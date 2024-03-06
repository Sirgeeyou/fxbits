import { Inter } from "next/font/google";
import React from "react";
import Navbar from "../../components/Navbar";
import ".././global.css";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createServerComponentClient({ cookies });
  const { data: user } = await supabase.auth.getUser();
  console.log(
    "Layout@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
    user
  );
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar user={user} />
        {children}
      </body>
    </html>
  );
}
