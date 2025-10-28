import { Product } from '@repo/types';

export const Products = async () => {
  const response = await fetch(`${process.env.API_URL}/products`, {
    next: { tags: ['products'] },
  });
  const products: Product[] = await response.json();

  return (
    <div className="flex w-full flex-col gap-y-8 sm:max-w-xl">
      <h1 className="text-2xl font-semibold">Products</h1>
      <div className="flex w-full flex-col items-stretch gap-y-3">
        {products.map((product) => (
          <div key={product.id} className="w-full rounded-md border px-6 py-4">
            <h2 className="text-xl font-medium">{product.name}</h2>
            <p className="my-1">{product.description}</p>
            <p className="font-semibold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
