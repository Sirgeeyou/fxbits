import { supabase } from "@/lib/supabase";
import { useEffect } from "react";

export default function Home() {
  const getSession = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    console.log(session);
  };

  return (
    <div>
      <h1 className="text-sky-400">Market Place</h1>
    </div>
  );
}
