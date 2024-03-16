import { Listing } from "@/types/types";

export default function UserListings({
  listings,
}: {
  listings: Listing[] | undefined;
}) {
  console.log("USER LISTING COMPONENT LISTINGS", listings);
  return (
    <div>
      {listings?.map((listing: any) => (
        <h1 key={listing.title} className="dark:text-white">
          {listing.title}
        </h1>
      ))}
    </div>
  );
}
