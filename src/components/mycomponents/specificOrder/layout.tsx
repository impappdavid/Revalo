// Updated SpecificOrderLayout.tsx
import { useState } from 'react';
import Sidebar from "../sidebar";
import MyOrder from "./myOrder";
import OrderMenu from "./orderMenu";

interface CartItem {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

function SpecificOrderLayout() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems(prev => {
      const existingItem = prev.find(i => i.name === item.name);
      if (existingItem) {
        return prev.map(i =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (name: string, delta: number) => {
    setCartItems(prev => {
      const item = prev.find(i => i.name === name);
      if (!item) return prev;

      const newQuantity = item.quantity + delta;
      if (newQuantity <= 0) {
        return prev.filter(i => i.name !== name);
      }

      return prev.map(i =>
        i.name === name ? { ...i, quantity: newQuantity } : i
      );
    });
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full flex justify-center dark:bg-zinc-950 bg-zinc-100 h-full">
      <div className="w-full max-w-6xl flex p-2 gap-4">
        <Sidebar />
        <div className="w-full hidden sm:flex max-w-40"></div>
        <div className="flex">
          <div className="flex flex-col gap-4 w-full">
            <OrderMenu onAddToCart={addToCart} />
          </div>
          <div className="w-full lg:max-w-76 hidden lg:flex items-center gap-2 flex-col">
            <MyOrder 
              cartItems={cartItems} 
              onUpdateQuantity={updateQuantity}
              totalPrice={totalPrice}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SpecificOrderLayout;
