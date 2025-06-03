import { LuShoppingCart } from "react-icons/lu";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import { fetchCartItems } from "@/utils/actions";

async function CartButton() {
  const numItemsInCart = await fetchCartItems();

  return (
    <Button asChild size="icon" variant="outline" className="relative">
      <Link href="/cart">
        <LuShoppingCart />
        <span className="bg-primary absolute -top-3 -right-3 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs text-white">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}

export default CartButton;
