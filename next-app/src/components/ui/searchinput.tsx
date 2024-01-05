import * as React from "react"
import { SearchIcon } from 'lucide-react';

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export interface SearchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-10 items-center rounded-md border border-input bg-white pl-3 py-2 text-md ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2",
          "text-muted-foreground",
          className,
        )}
      >
        <SearchIcon size={16} />
        <input
          type="search"
          className="ml-2 w-[calc(100%-2.25rem)] placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);

SearchInput.displayName = "Search";

export { SearchInput };