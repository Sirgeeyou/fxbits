import { getListings } from "@/services/apiListings";
import { Listing } from "@/types/types";

export default async function Home() {
  const listings: Listing[] = await getListings();
  return (
    <div>
      <h1 className="text-sky-400">Market Place</h1>
      {listings.map((listing) => (
        <h2 key={listing.id}>{listing.title}</h2>
      ))}
      <h2></h2>
    </div>
  );
}
