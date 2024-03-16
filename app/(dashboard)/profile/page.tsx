import Gallery from "@/components/Gallery";
import { getUserListing } from "@/services/getUserListings";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

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
      <div className="flex min-h-screen  items-center justify-center bg-background">
        <Gallery listings={listings} />
      </div>
    </main>
  );
}
