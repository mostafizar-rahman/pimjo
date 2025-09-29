"use client";
import Button from "@/component/ui/button";
import { PiClose, PiShoppingCart } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { useCart } from "@/providers/cartProvider";
import Image from "next/image";
import { useState } from "react";
import { Toaster } from 'react-hot-toast';

const CartSidebar = () => {
  const [cartSidebarShow, setCartSidebarShow] = useState(false);
  const { cartItems, getCartCount, removeFromCart } = useCart();

  return (
    <div>
      <Toaster/>
      <div
        onClick={() => setCartSidebarShow(true)}
        className="text-gray-700 cursor-pointer w-6 h-6 flex justify-center items-center relative"
      >
        <PiShoppingCart />
        {getCartCount() > 0 && (
          <div className="absolute -top-2 -right-2 w-[18px] h-[18px] border border-primary rounded-2xl bg-[#1D4ED8] text-center flex justify-center items-center text-[10px] font-medium text-primary tracking-[-0.2px]">
            {getCartCount()}
          </div>
        )}
      </div>
      <div
        className={cn(
          "fixed top-0 z-50 h-screen bg-primary border-r border-r-border w-full max-w-[360px] transition-all duration-300",
          cartSidebarShow ? "right-0" : "-right-full"
        )}
      >
        <div className="border-b border-b-border py-5 px-5 flex justify-between items-center">
          <h5 className="font-semibold text-lg">Your Cart</h5>
          <button
            onClick={() => setCartSidebarShow(false)}
            className="w-6 h-6 flex justify-center items-center"
          >
            <PiClose className={"size-4"} />
          </button>
        </div>
        <div className="py-5 h-[calc(100vh-73px)] flex flex-col">
          {cartItems.length > 0 ? (
            <>
              <div className="flex-grow overflow-y-auto space-y-5 px-5">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3 w-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-md object-cover"
                      />
                      <div className="w-full">
                        <div className="flex items-center justify-between gap-4">
                          <p className="font-medium leading-[142%] line-clamp-1">
                            {item.title}
                          </p>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-100 hover:text-red-500"
                          >
                            <PiClose className={"size-4"} />
                          </button>
                        </div>
                        <small className="text-gray-100 leading-[150%] block">
                          Qty: {item.quantity}
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-5 border-t border-t-border px-5">
                <div className="flex justify-between items-center font-semibold">
                  <p>Total</p>
                  <p>
                    $
                    {cartItems
                      .reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </p>
                </div>
                <Button variant={"outline"} className="w-full mt-4">
                  Checkout
                </Button>
              </div>
            </>
          ) : (
            <div className="flex-grow flex flex-col items-center justify-center text-center">
              <PiShoppingCart className="size-12 text-gray-200" />
              <p className="mt-4 text-lg font-semibold">Your cart is empty</p>
              <p className="text-sm text-gray-100">
                Add products to your cart to see them here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
