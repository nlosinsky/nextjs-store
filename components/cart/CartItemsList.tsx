import { Card } from "@/components/ui/card";

import { CartItemWithProduct } from "@/utils/types";

import { FirstColumn, FourthColumn, SecondColumn } from "./CartItemColumns";
import ThirdColumn from "./ThirdColumn";

function CartItemsList({ cartItems }: { cartItems: CartItemWithProduct[] }) {
  return (
    <div>
      {cartItems.map((cartItem) => {
        const { id, amount } = cartItem;
        const { id: productId, image, name, company, price } = cartItem.product;

        return (
          <Card
            key={id}
            className="mb-8 flex flex-col flex-wrap gap-x-4 gap-y-4 p-6 md:flex-row"
          >
            <FirstColumn image={image} name={name} />
            <SecondColumn name={name} company={company} productId={productId} />
            <ThirdColumn id={id} quantity={amount} />
            <FourthColumn price={price} />
          </Card>
        );
      })}
    </div>
  );
}

export default CartItemsList;
