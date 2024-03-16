import { Listing } from "@/types/types";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Gallery({
  listings,
}: {
  listings: Listing[] | undefined;
}) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-6xl"
    >
      <CarouselContent>
        {listings &&
          listings.map((listing, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card>
                <CardContent className="flex aspect-square max-h-[500px] items-center justify-center rounded-lg p-0">
                  <Image
                    src={listing.image}
                    alt={listing.title}
                    width={500}
                    height={500}
                    style={{ maxWidth: "100%", height: "100%" }}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious className="size-12 dark:bg-primary" />
      <CarouselNext className="size-12 dark:bg-primary" />
    </Carousel>
  );
}
