import { supabase } from "@/lib/supabase";

export async function getListings(params: any = {}) {
  console.log("GetListing triggerd");
  const { searchQuery } = params;

  if (searchQuery) {
    const { data, error } = await supabase
      .from("listings")
      .select()
      .ilike("title", `%${searchQuery}%`);
    if (error) {
      console.error(error);
      throw new Error("Listing could not be loaded");
    }
    console.log("getListingData", data);
    return data;
  } else {
    const { data, error } = await supabase.from("listings").select("*");
    if (error) {
      console.error(error);
      throw new Error("Listing could not be loaded");
    }
    console.log("getListings return data:", data);
    return data;
  }
}
