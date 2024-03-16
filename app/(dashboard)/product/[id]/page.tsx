import Product from "@/components/Product";
import { getListingById } from "@/services/getListingById";

export default async function ItemDetails({
  params,
}: {
  params: { id: string };
}) {
  const data = await getListingById(params.id);
  return (
    <main className="flex min-h-screen max-w-[1280p] items-center justify-center bg-background">
      {data ? <Product data={data} /> : <p>Loading...</p>}
    </main>
  );
}
