import { filterListings } from "@/services/filterListings";
import { SearchParamsProps } from "@/types/types";
import BackgroundBoxes from "@/components/BackgroundBoxes";
import { MovingDiv } from "@/components/MovingDiv";
import SearchBar from "@/components/SearchBar";
import Filter from "@/components/Filter";
import "../global.css";
import Pagination from "@/components/Pagination";
import ProductList from "@/components/ProductList";

export default async function Home({ searchParams }: SearchParamsProps) {
  const { listingsWithImages, isNext } = await filterListings({
    searchQuery: searchParams?.q,
    filter: searchParams.filter,
    page: searchParams.page ? +searchParams.page : 1,
  });

  return (
    <>
      <BackgroundBoxes />

      <MovingDiv />

      <div className="mx-auto max-w-7xl">
        <h1 className="mb-10 text-start text-xl font-bold text-primary dark:text-primary md:text-4xl">
          Products
        </h1>
        <div className=" flex max-w-[500px] flex-col-reverse items-start gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 pb-2">
            <p className="text-base text-muted-foreground">Apply a filter</p>
            <Filter />
          </div>
          <SearchBar />
        </div>

        <div className="my-10 flex justify-center">
          <ProductList listingsWithImages={listingsWithImages} />
        </div>
      </div>

      <Pagination
        pageNumber={searchParams?.page ? +searchParams.page : 1}
        isNext={isNext}
      />
    </>
  );
}
