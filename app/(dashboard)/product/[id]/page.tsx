import Product from "@/components/Product";
import { getListingById } from "@/services/getListingById";
import { Home } from "lucide-react";
import Link from "next/link";

export default async function ItemDetails({
  params,
}: {
  params: { id: string };
}) {
  const data = await getListingById(params.id);
  return (
    <main className="flex min-h-screen max-w-[1280px] items-center justify-center bg-background">
      <div className="absolute left-6 top-6 text-neutral-400 dark:text-white">
        <Link href={"/"}>
          <Home size={30} />
        </Link>
      </div>
      {data ? <Product data={data} /> : <p>Loading...</p>}
    </main>
  );
}
