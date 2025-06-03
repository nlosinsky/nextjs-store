import { redirect } from "next/navigation";
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

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const session_id = searchParams.get("session_id");

    if (!session_id) {
      return Response.json(null, {
        status: 400,
        statusText: "Session ID is required"
      });
    }

    const session = await stripe.checkout.sessions.retrieve(session_id);

    const orderId = session.metadata?.orderId;
    const cartId = session.metadata?.cartId;

    if (session.status === "complete" && orderId && cartId) {
      await db.order.update({
        where: {
          id: orderId
        },
        data: {
          isPaid: true
        }
      });
      await db.cart.delete({
        where: {
          id: cartId
        }
      });
    }
  } catch (err) {
    console.log(err);
    return Response.json(null, {
      status: 500,
      statusText: "Internal Server Error"
    });
  }
  redirect("/orders");
};
