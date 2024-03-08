import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { getListings } from "@/services/getListings";
import { Listing } from "@/types/types";
import Image from "next/image";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const [listingImages, setListingImages] = useState<Array<Listing>>([]);
  useEffect(function () {
    async function getAllListings() {
      try {
        const listings = await getListings();
        setListingImages(listings);
      } catch (error) {
        console.log("Error fetching listings: ", error);
      }
    }
    getAllListings();
  }, []);
  const images = listingImages.map((listing) => listing.image);

  console.log("Listing images:", images);
  const rows = new Array(30).fill(1);
  const cols = new Array(12).fill(1);

  const getRandomImageUrl = () => {
    return images[Math.floor(Math.random() * images.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 ",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="relative h-32  w-64  border-l border-slate-700"
        >
          {cols.map((_, j) => (
            <motion.div
              key={`col` + j}
              className="relative h-32  w-64 overflow-hidden border-r border-t border-slate-700"
            >
              {/* Grid SVG */}
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="pointer-events-none absolute -left-[22px] -top-[14px] h-6 w-10 stroke-[8px] text-slate-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}

              {getRandomImageUrl() && (
                <motion.div
                  className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                >
                  <Image
                    src={getRandomImageUrl()}
                    alt={`image-${i}-${j}`}
                    height={700}
                    width={700}
                    quality={75}
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
