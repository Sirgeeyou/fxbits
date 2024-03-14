import { supabase } from "@/lib/supabase";

export async function filterListings(params: any) {
  const { searchQuery, filter } = params;

  console.log("Search query, filter: ", searchQuery, filter);

  let query = supabase.from("listings").select("*");

  try {
    if (searchQuery) {
      query = query.ilike("title", `%${searchQuery}%`);
      console.log("Query after search:", query.toString());
    }

    if (filter) {
      query = query.ilike("category", `%${filter}%`);
      console.log("Query after filter:", query.toString());
    }

    const { data, error } = await query;

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
