import { getListings } from "@/services/apiListings";
import { Listing } from "@/types/types";
import BackgroundBoxes from "@/components/BackgroundBoxes";
import { ThreeDCardDemo } from "@/components/Card";
import { InfiniteMovingCardsDemo } from "@/components/MovingDiv";
import SearchBar from "@/components/SearchBar";

export default async function Home() {
  const listings: Listing[] = await getListings();
  console.log("LISTINGSSZZZ:", listings);

  return (
    <>
      <BackgroundBoxes />
      <div className="">
        <InfiniteMovingCardsDemo />
      </div>

      <div></div>
      <div className="mx-auto mt-40 max-w-7xl">
        <h1 className="text-center text-4xl font-bold">Products</h1>
        <div className="mb-20">
          <SearchBar />
        </div>

        <div className="mt-15 flex flex-wrap justify-center gap-5">
          {listings.map((listing) => (
            <ThreeDCardDemo key={listing.id} listingData={listing} />
          ))}
        </div>
      </div>
    </>
  );
}
