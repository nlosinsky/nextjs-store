"use client";

import { useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import { useDebouncedCallback } from "use-debounce";

import { Input } from "../ui/input";

function NavSearch() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState(
    searchParams.get("search")?.toString() ?? ""
  );
  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    router.replace(`/products?${params.toString()}`);
  }, 300);

  return (
    <Input
      type="search"
      placeholder="search product..."
      className="dark:bg-muted max-w-xs"
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
      value={search}
    />
  );
}

export default NavSearch;
