import { filterListings } from "@/services/filterListings";
import { Listing, SearchParamsProps } from "@/types/types";
import BackgroundBoxes from "@/components/BackgroundBoxes";
import { ProductCard } from "@/components/Card";
import { InfiniteMovingCardsDemo } from "@/components/MovingDiv";
import SearchBar from "@/components/SearchBar";
import Filter from "@/components/Filter";
import "../global.css";
import Pagination from "@/components/Pagination";

export default async function Home({ searchParams }: SearchParamsProps) {
  const listings: Listing[] = await filterListings({
    searchQuery: searchParams?.q,
    filter: searchParams.filter,
  });

  let result;

  return (
    <>
      <BackgroundBoxes />
      <div>
        <InfiniteMovingCardsDemo />
      </div>

      <div className="mx-auto mt-40 max-w-7xl">
        <h1 className="text-center text-4xl font-bold">Products</h1>
        <div className="mb-20">
          <SearchBar />
        </div>
        <Filter />

        <div className="my-10 flex flex-wrap justify-center gap-5">
          {listings.map((listing) => (
            <ProductCard key={listing.id} listingData={listing} />
          ))}
        </div>
      </div>

      <Pagination
        pageNumber={searchParams?.page ? +searchParams.page : 1}
        isNext={result.isNext}
      />
    </>
  );
}
