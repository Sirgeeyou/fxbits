export default function ItemDetails({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <h1>Item {params.id}</h1>
    </main>
  );
}
