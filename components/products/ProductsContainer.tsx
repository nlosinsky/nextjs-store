import { LuLayoutGrid, LuList } from "react-icons/lu";

import Link from "next/link";

import ProductsList from "@/components/products/ProductsList";

import { fetchAllProducts } from "@/utils/actions";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import ProductsGrid from "./ProductsGrid";

async function ProductsContainer({
  layout,
  search
}: {
  layout: string;
  search: string;
}) {
  const products = await fetchAllProducts(search);
  const totalProducts = products.length;
  const searchTerm = search ? `&search=${search}` : "";

  return (
    <>
      <section>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-medium">
            {totalProducts} product{totalProducts > 1 && "s"}
          </h4>
          <div className="flex gap-x-4">
            <Button
              variant={layout === "grid" ? "default" : "ghost"}
              size="icon"
              asChild
            >
              <Link href={`/products?layout=grid${searchTerm}`}>
                <LuLayoutGrid />
              </Link>
            </Button>
            <Button
              variant={layout === "list" ? "default" : "ghost"}
              size="icon"
              asChild
            >
              <Link href={`/products?layout=list${searchTerm}`}>
                <LuList />
              </Link>
            </Button>
          </div>
        </div>
        <Separator className="mt-4" />
      </section>

      <div>
        {totalProducts === 0 ? (
          <h5 className="mt-16 text-2xl">
            Sorry, no products matched your search...
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </>
  );
}

export default ProductsContainer;
