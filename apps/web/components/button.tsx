import { ComponentProps } from "react";

import { cn } from "../app/libs/utils";

export const Button = ({ className, ...props }: ComponentProps<"button">) => {
  return (
    <button
      className={cn(
        "text-primary-foreground hover:bg-primary/90 h-9 rounded-lg bg-blue-500 px-4 py-2 font-medium text-white has-[>svg]:px-3",
        className,
      )}
      {...props}
    />
  );
};
