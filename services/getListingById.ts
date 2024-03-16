import { supabase } from "@/lib/supabase";
import { Listing } from "@/types/types";

export async function getListingById(
  listingId: string
): Promise<Listing | undefined> {
  try {
    const { data, error } = await supabase
      .from("listings")
      .select("*")
      .eq("id", listingId);

    if (error) {
      console.error("Error fetching listing by ID:", error.message);
    }

    if (data && data.length > 0) {
      const listing = data[0];
      const imageUrl = `https://gmygxkvjdilaoerggioq.supabase.co/storage/v1/object/public/listing-images/${listing.listing_by}/${listing.id}/${listing.file_name}`;
      return { ...listing, image: imageUrl } as Listing;
    }
  } catch (error) {
    console.error("Error fetching listing by ID:", error);
  }

  return undefined;
}
