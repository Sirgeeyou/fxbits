"use server";
import { supabase } from "@/lib/supabase";
import { Listing } from "@/types/types";

export async function getUserListing(
  userId: string
): Promise<Listing[] | undefined> {
  try {
    const { data, error } = await supabase
      .from("listings")
      .select("*")
      .eq("listing_by", userId);

    if (error) {
      console.error("Error fetching listings by user ID:", error.message);
      return undefined;
    }

    if (data && data.length > 0) {
      return data.map((listing) => {
        const imageUrl = `https://gmygxkvjdilaoerggioq.supabase.co/storage/v1/object/public/listing-images/${listing.listing_by}/${listing.id}/${listing.file_name}`;
        return { ...listing, image: imageUrl };
      });
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching listings by user ID:", error);
    return undefined;
  }
}
