import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LuShoppingCart } from 'react-icons/lu';

function CartButton() {
  const numItemsInCart = 9;
  return (
    <Button asChild
            size='icon'
            variant="outline"
            className="relative"
    >
      <Link href="/cart">
        <LuShoppingCart />
        <span className="absolute -top-3 -right-3 rounded-full bg-primary w-6 h-6 text-white inline-flex items-center justify-center text-xs">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}

export default CartButton;
