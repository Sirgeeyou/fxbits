import { Listing } from "@/types/types";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";

export default function UserListings({
  listings,
}: {
  listings: Listing[] | undefined;
}) {
  if (!listings) {
    return (
      <div>
        <h1 className="mt-40 text-5xl text-muted-foreground">
          You have no listings...
        </h1>
      </div>
    );
  }
  return (
    <div className="mt-40 flex flex-col gap-5">
      <h1 className="text-5xl text-muted-foreground">
        Check out your listings
      </h1>
      <section className=" flex max-w-[1280px] flex-col justify-center gap-3 align-middle">
        {listings?.map((listing) => (
          <Link href={`/product/${listing.id}`} key={listing.id}>
            <div className="flex rounded-md border  border-border">
              <div className="max-h-[350px] min-h-full overflow-hidden">
                <Image
                  src={listing.image}
                  alt={listing.title}
                  width={350}
                  height={350}
                  className=" rounded-md "
                  style={{ maxWidth: "100%", height: "100%" }}
                />
              </div>
              <div className="my-1 flex min-w-36 flex-col p-4">
                <p className="truncate text-2xl text-primary dark:text-primary">
                  {listing.title}
                </p>

                <Badge className="mb-2 text-stone-800 dark:text-stone-300">
                  {listing.category}
                </Badge>

                <p className="mb-3 overflow-hidden truncate text-stone-800 dark:text-stone-300">
                  {listing.description}
                </p>

                <p className="mb-2 text-stone-800 dark:text-stone-300">
                  ${listing.price}
                </p>

                <p className="mb-2 text-stone-800 dark:text-stone-300">
                  {listing.short_description}
                </p>

                <p className="text-sm text-muted-foreground">
                  {format(new Date(listing.created_at), "MM/dd/yyyy")}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
