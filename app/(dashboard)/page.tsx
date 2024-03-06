import { getListings } from "@/services/apiListings";
import { Listing } from "@/types/types";

export default async function Home() {
  const listings: Listing[] = await getListings();
  return (
    <div className="h-[1200px]">
      <h1 className="text-sky-400">Market Place</h1>
      {listings.map((listing) => (
        <h2 key={listing.id}>{listing.title}</h2>
      ))}
    </div>
  );
}
