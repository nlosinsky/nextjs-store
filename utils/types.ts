import { Prisma } from "@prisma/client";

export type actionFunction = (
  prevState: unknown,
  formData: FormData
) => Promise<{ message: string }>;

export type CartItemWithProduct = Prisma.CartItemGetPayload<{
  include: { product: true };
}>;

export type ReviewWithAuthor = Prisma.ReviewGetPayload<{
  include: { author: true };
}>;
