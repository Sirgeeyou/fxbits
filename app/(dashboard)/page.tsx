import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  return (
    <div>
      <h1 className="text-sky-400">Market Place</h1>
    </div>
  );
}
