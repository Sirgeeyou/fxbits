import UserListings from "@/components/UserListings";
import { getUserListing } from "@/services/getUserListings";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Home } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function page() {
  const supabase = createServerComponentClient({ cookies });
  const { data: user } = await supabase.auth.getUser();

  // Check if user is not undefined before accessing its id
  const userId = user?.user?.id;

  if (!userId) {
    // Handle the case when user id is undefined
    return <div>User id not found</div>;
  }

  const listings = await getUserListing(userId);

  return (
    <main>
      <div className="absolute left-6 top-6 text-neutral-400 dark:text-white">
        <Link href={"/"}>
          <Home size={30} />
        </Link>
      </div>
      <div className="flex min-h-screen justify-center bg-background  align-middle">
        <UserListings listings={listings} />
      </div>
    </main>
  );
}
