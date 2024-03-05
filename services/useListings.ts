"use client";
import { supabase } from "@/lib/supabase";
import { Listing } from "@/types/types";
import { useState } from "react";

export async function useListings() {
  const [listings, setListings] = useState<Listing[]>([]);
  const { data, error } = await supabase.from("listings").select("*");

  if (data) {
    try {
      setListings(data);
    } catch (error) {
      console.log(error);
    }
  }

  if (error) {
    console.error(error);
    throw new Error('"listing could not be loaded"');
  }
  return listings;
}
