import { CircleFadingPlus } from "lucide-react";
import Link from "next/link";

export default function AddListingButton() {
  return (
    <div>
      <Link
        href={"/addlisting"}
        className="flex items-center gap-2 text-lg text-secondary-foreground"
      >
        <CircleFadingPlus className="text-neutral-400 dark:text-white" />
        <p>Add</p>
      </Link>
    </div>
  );
}
