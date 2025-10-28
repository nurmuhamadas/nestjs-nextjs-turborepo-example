import createProduct from "../actions/create-product";

import { Button } from "./button";
import { Input } from "./input";

export const ProductForm = () => {
  return (
    <form
      action={createProduct}
      className="flex w-full flex-col items-stretch gap-y-2 sm:max-w-sm"
    >
      <div>
        <label htmlFor="name">Name:</label>
        <Input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          name="description"
          id="description"
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <Input type="number" name="price" id="price" />
      </div>
      <Button className="mt-6" type="submit">
        Create Product
      </Button>
    </form>
  );
};
