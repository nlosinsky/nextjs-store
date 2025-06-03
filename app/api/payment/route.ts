import { type NextRequest } from "next/server";

import Stripe from "stripe";

import db from "@/utils/db";

const secretKey = process.env.STRIPE_SECRET_KEY;

if (!secretKey) {
  throw new Error("Stripe secret key is not defined");
}

const stripe = new Stripe(secretKey, {
  apiVersion: "2025-05-28.basil"
});

type PaymentCartRequest = {
  orderId: string;
  cartId: string;
};

export const POST = async (req: NextRequest) => {
  const requestHeaders = new Headers(req.headers);
  const origin = requestHeaders.get("origin");

  const { orderId, cartId } = (await req.json()) as PaymentCartRequest;

  const order = await db.order.findUnique({
    where: {
      id: orderId
    }
  });
  const cart = await db.cart.findUnique({
    where: {
      id: cartId
    },
    include: {
      cartItems: {
        include: {
          product: true
        }
      }
    }
  });

  if (!order || !cart || !origin) {
    return Response.json(null, {
      status: 404,
      statusText: "Not Found"
    });
  }

  const line_items = cart.cartItems.map((cartItem) => {
    return {
      quantity: cartItem.amount,
      price_data: {
        currency: "usd",
        product_data: {
          name: cartItem.product.name,
          images: [cartItem.product.image]
        },
        unit_amount: cartItem.product.price * 100 // price in cents
      }
    };
  });

  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      metadata: { orderId, cartId },
      line_items: line_items,
      mode: "payment",
      return_url: `${origin}/api/confirm?session_id={CHECKOUT_SESSION_ID}`
    });

    return Response.json({ clientSecret: session.client_secret });
  } catch (error) {
    console.log(error);

    return Response.json(null, {
      status: 500,
      statusText: "Internal Server Error"
    });
  }
};
