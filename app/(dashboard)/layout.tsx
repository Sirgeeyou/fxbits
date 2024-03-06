import { Inter } from "next/font/google";
import React from "react";
import ".././global.css";
import { ThemeProvider } from "@/components/theme-provider";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Navbarv2 from "@/components/Navbarv2";

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
    user.user
  );
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbarv2 user={user} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
