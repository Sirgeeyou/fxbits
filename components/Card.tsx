"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Listing } from "@/types/types";
import { useRouter } from "next/navigation";

export function ProductCard({ listingData }: { listingData: Listing }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/product/${listingData.id}`)}
      className="cursor-pointer"
    >
      <CardContainer className="my-8 h-64 w-[310px]">
        <CardBody className="group/card relative size-auto  rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]  ">
          <CardItem
            translateZ="50"
            className="text-2xl font-bold text-neutral-600 dark:text-white"
          >
            <span>{listingData.title}</span>
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
          >
            <span>{listingData.short_description}</span>
          </CardItem>
          <CardItem translateZ="100" className="mt-4 w-full">
            {listingData.image && (
              <Image
                src={listingData.image}
                height="1000"
                width="1000"
                className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                alt={listingData.title}
              />
            )}
          </CardItem>
          <div className="mt-20 flex items-center justify-between">
            <CardItem
              translateZ={20}
              as="button"
              className="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
            >
              Visit now →
            </CardItem>
            <CardItem
              as="button"
              translateZ={20}
              className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
            >
              Sign up
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
