"use server";
import { supabase } from "@/lib/supabase";

export async function filterListings(params: any = {}) {
  const { searchQuery, filter } = params;

  let query = supabase.from("listings").select("*");

  if (searchQuery) {
    query = query.ilike("title", `%${searchQuery}%`);
  }

  if (filter) {
    query = query.ilike("category", `%${filter}%`);
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Listing could not be loaded");
  }

  return data;
}
