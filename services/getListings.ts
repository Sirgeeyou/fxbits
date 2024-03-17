"use server";
import { supabase } from "@/lib/supabase";

export async function getAllListingsImages() {
  const { data, error } = await supabase.from("listings").select("*");

  const listings = data?.map((listing) => {
    return {
      ...data,
      image: `https://gmygxkvjdilaoerggioq.supabase.co/storage/v1/object/public/listing-images/${listing.listing_by}/${listing.id}/${listing.file_name}`,
    };
  });

  if (error) {
    console.error(error);
    throw new Error("Listing could not be loaded");
  }

  return listings;
}
