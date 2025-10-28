import { ProductForm, Products } from "../components";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center gap-y-12 px-4 py-12 md:px-8 lg:px-12">
      <ProductForm />

      <Products />
    </div>
  );
}
