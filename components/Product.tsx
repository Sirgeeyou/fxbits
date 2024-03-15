"use client";
import { motion } from "framer-motion";
import { Listing } from "@/types/types";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Product({ data }: { data: Listing }) {
  const {
    title,
    description,
    price,
    category,
    short_description: shortDescription,
    image,
  } = data;

  return (
    <div
      className={cn(
        "flex min-h-screen items-center justify-center bg-background p-4"
      )}
    >
      <div className={cn("relative flex max-w-7xl")}>
        {/* Image */}
        <motion.div
          className={cn("relative size-80 z-10 rounded-l-lg overflow-hidden")}
          initial={{ filter: "blur(8px)" }}
          animate={{ filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className={cn("rounded-l-lg")}
          />
        </motion.div>

        {/* Animated product details */}
        <motion.div
          className={cn(
            "overflow-hidden rounded-br-lg rounded-tr-lg bg-card shadow-lg  dark:shadow-accent/[0.2] absolute left-0 right-0 p-4 min-w-[320px] max-w-[650px] h-[320px] dark:hover:shadow-emerald-500/[0.1] ease-in-out duration-300"
          )}
          initial={{ y: "0", opacity: 0 }} // Start from above the image
          animate={{ x: "100%", opacity: 1 }} // Animate downwards towards the top of the image
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-2 text-xl font-bold text-neutral-600 dark:text-neutral-300">
            {title}
          </h1>
          <p className="max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
            {description}
          </p>
          <p className="text-base text-neutral-600 dark:text-neutral-300">
            {shortDescription}
          </p>
          <p className="text-base text-neutral-600 dark:text-neutral-300">
            Price: ${price}
          </p>
          <p className="text-base text-neutral-600 dark:text-neutral-300">
            Category: {category}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
