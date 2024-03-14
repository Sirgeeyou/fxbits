import { supabase } from "@/lib/supabase";

export async function filterListings(params: any) {
  try {
    const { searchQuery, filter, page = 1, pageSize = 10 } = params;

    // Calculate the offset based on the current page number and page size
    const offset = (page - 1) * pageSize;

    console.log("Offset:", offset);
    console.log("PageSize:", pageSize);
    console.log("SearchQuery: ", searchQuery);
    console.log("filterL: ", filter);

    // Construct the query
    let query = supabase.from("listings").select("*");

    // Apply search query filter if provided
    if (searchQuery) {
      query = query.ilike("title", `%${searchQuery}%`);
    }

    // Apply category filter if provided
    if (filter) {
      query = query.ilike("category", `%${filter}%`);
    }

    // Limit the query results to the appropriate range
    const from = offset; // Starting index for the range
    const to = offset + pageSize - 1; // Ending index for the range
    query = query.range(from, to);

    console.log("Query:", query.toString());

    const { data, error } = await query;

    console.log("Retrieved Data:", data);

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

    return listingsWithImages;
  } catch (error) {
    console.error("Error filtering listings:", error);
    throw error;
  }
}
