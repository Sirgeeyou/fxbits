import { AddListingForm } from "@/components/AddListingForm";
import { Home } from "lucide-react";
import Link from "next/link";

export default function AddListing() {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-background">
      <div className="absolute left-6 top-6 text-neutral-400 dark:text-white">
        <Link href={"/"}>
          <Home size={30} />
        </Link>
      </div>
      <AddListingForm />
    </main>
  );
}
