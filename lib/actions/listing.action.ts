import { revalidatePath } from "next/cache";
import { supabase } from "../supabase";

interface createListingProps {
  title: string;
  description: string;
  image: File;
}

export async function createListing({
  title,
  description,
  image,
}: createListingProps) {
  // Ensure the user is authenticated
  const user = await supabase.auth.getUser();
  if (!user) {
    throw new Error("User not authenticated");
  }

  // Upload the file to Supabase Storage
  const { data: fileData, error: fileError } = await supabase.storage
    .from("listings")
    .upload(`images/${image.name}`, image);

  if (fileError) {
    console.error("Error uploading image:", fileError);
    throw new Error("Image could not be uploaded");
  }

  // Get the URL of the uploaded file
  const imageUrl = fileData?.path;

  // Insert listing data into the 'listings' table
  const { data: listingData, error: listingError } = await supabase
    .from("listings")
    .insert([
      {
        title,
        description,
        image: imageUrl, // Use the imageUrl obtained from the uploaded image
        listing_by: user?.data?.user?.id, // Link the listing to the authenticated user
      },
    ])
    .select();

  revalidatePath("/");

  if (listingError) {
    console.error(listingError);
    throw new Error("Listing could not be inserted");
  }

  return listingData;
}
