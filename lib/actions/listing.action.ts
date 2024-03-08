import { revalidatePath } from "next/cache";
import { supabase } from "../supabase";

export async function createListing(title: string, description: string) {
  const { data, error } = await supabase
    .from("listings")
    .insert([{ title, description }])
    .select();

  revalidatePath("/");

  if (error) {
    console.error(error);
    throw new Error('"listing could not be inserted"');
  }
  return data;
}
