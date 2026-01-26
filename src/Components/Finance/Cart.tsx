import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import EmptyCart from "@/assets/images/illustration-empty-cart.svg";
const Cart = () => {
  const [products, setProducts] = useState<number>(0);
  return (
    <Card className="bg-white border-0">
      <CardHeader>
        <CardTitle className="text-red font-bold">
          Your Cart ({products})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <img
          src={EmptyCart}
          alt="Empty Cart Illustration"
          className="mx-auto"
        />
        <p className="text-rose-400 text-base font-semibold text-center mt-4">
          Your added items will appear here
        </p>
      </CardContent>
    </Card>
  );
};

export default Cart;
