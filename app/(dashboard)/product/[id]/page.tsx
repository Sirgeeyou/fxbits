import Product from "@/components/Product";
import { getListingById } from "@/services/getListingById";

export default async function ItemDetails({
  params,
}: {
  params: { id: string };
}) {
  const data = await getListingById(params.id);
  return (
    <main className="w-[1280px]">
      {data ? <Product data={data} /> : <p>Loading...</p>}
    </main>
  );
}
