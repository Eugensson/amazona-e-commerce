import { Metadata } from "next";

import CartDetails from "@/app/(front)/cart/CartDetails";

export const metadata: Metadata = {
  title: "Shopping Cart",
};

const CartPage = () => {
  return <CartDetails />;
};

export default CartPage;
