import { supabase } from "@/lib/supabase";

export async function getListings() {
  const { data, error } = await supabase.from("listings").select("*");

  if (error) {
    console.error(error);
    throw new Error('"listing could not be loaded"');
  }
  return data;
}
