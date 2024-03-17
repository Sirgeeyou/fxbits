"use client";
import { motion } from "framer-motion";
import { ProductCard } from "./Card";
import { Listing } from "@/types/types";

export default function ProductList({
  listingsWithImages,
}: {
  listingsWithImages: Listing[];
}) {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => {
      return {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.02 * index,
        },
      };
    },
  };

  return (
    <>
      {listingsWithImages.length === 0 ? (
        <h1 className="text-neutral-800 dark:text-primary">
          No listings matched your searches...
        </h1>
      ) : (
        <ul className="flex flex-wrap gap-x-3 gap-y-5">
          {listingsWithImages.map((listing, index) => (
            <motion.li
              key={listing.id}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <ProductCard listingData={listing} />
            </motion.li>
          ))}
        </ul>
      )}
    </>
  );
}
