import { Inter } from "next/font/google";
import React from "react";
import Navbar from "../../components/Navbar";
import ".././global.css";

const inter = Inter({ subsets: ["latin"] });

// const supabase = createServerComponentClient({ cookies });
// const { data: userSession } = await supabase.auth.getSession();
// console.log(
//   "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
//   userSession.session
// );

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
