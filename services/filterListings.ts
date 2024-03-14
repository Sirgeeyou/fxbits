import { supabase } from "@/lib/supabase";

export async function filterListings(params: any) {
  try {
    const { searchQuery, filter, page = 1, pageSize = 10 } = params;

    // Calculate the skipAmount based on the current page number and page size
    const skipAmount = (page - 1) * pageSize;

    console.log("skipAmount:", skipAmount);
    console.log("PageSize:", pageSize);
    console.log("SearchQuery: ", searchQuery);
    console.log("filterL: ", filter);

    // Construct the query
    let query = supabase.from("listings").select("*", { count: "exact" });
    console.log("QUERY COUNT&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&: ", query);
    // Apply search query filter if provided
    if (searchQuery) {
      query = query.ilike("title", `%${searchQuery}%`);
    }

    // Apply category filter if provided
    if (filter) {
      query = query.ilike("category", `%${filter}%`);
    }

    const from = skipAmount;
    const to = skipAmount + pageSize - 1;
    query = query.range(from, to);

    const { data, error, count } = await query;

    // If no listings are found, return an empty array
    if (!data || data.length === 0) {
      return { listingsWithImages: [], isNext: false };
    }

    if (error) {
      console.error("Error fetching listings:", error);
      throw new Error("Listing could not be loaded");
    }

    // Fetch image URLs for each listing
    const listingsWithImages = await Promise.all(
      data.map(async (listing) => {
        const imageUrl = `https://gmygxkvjdilaoerggioq.supabase.co/storage/v1/object/public/listing-images/${listing.listing_by}/${listing.id}/${listing.file_name}`;
        return { ...listing, image: imageUrl };
      })
    );

    const totalListings = listingsWithImages.length;
    console.log("TotalLisintgs: ", totalListings);
    console.log("skipAmount", skipAmount);
    console.log("Count", count);
    console.log("pageSize: ", pageSize);

    const isNext = count > skipAmount + totalListings;
    console.log("ISNEXT: ", isNext);

    //15  > 10 + 5

    return { listingsWithImages, isNext };
  } catch (error) {
    console.error("Error filtering listings:", error);
    throw error;
  }
}
