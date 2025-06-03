import Image from "next/image";
import Link from "next/link";

import { Product } from "@prisma/client";

import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import { Card, CardContent } from "@/components/ui/card";

import { formatCurrency } from "@/utils/format";

function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { id, name, price, image, company } = product;
        const dollarsAmount = formatCurrency(price);

        return (
          <article key={id} className="group relative">
            <Link href={`/products/${id}`}>
              <Card className="transform transition-shadow duration-500 group-hover:shadow-xl">
                <CardContent className="grid gap-y-4 p-8 md:grid-cols-3">
                  <div className="relative h-64 md:h-48 md:w-48">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                      priority
                      className="w-full rounded-md object-cover"
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold capitalize">{name}</h2>
                    <h4 className="text-muted-foreground">{company}</h4>
                  </div>
                  <p className="text-muted-foreground text-lg md:ml-auto">
                    {dollarsAmount}
                  </p>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute right-8 bottom-8 z-5">
              <FavoriteToggleButton productId={id} />
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ProductsList;
