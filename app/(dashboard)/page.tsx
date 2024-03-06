import { getListings } from "@/services/apiListings";
import { Listing } from "@/types/types";
import BackgroundBoxes from "@/components/BackgroundBoxes";
import { ThreeDCardDemo } from "@/components/Card";

export default async function Home() {
  const listings: Listing[] = await getListings();
  return (
    <>
      <BackgroundBoxes />
      <div className="flex ">
        <h1 className="text-sky-400">Market Place</h1>
        {listings.map((listing) => (
          <ThreeDCardDemo key={listing.id} listings={listings} />
        ))}
      </div>
    </>
  );
}
