// Updated MyOrder.tsx
import { Separator } from "@/components/ui/separator"
import { MapPin, Minus, Plus, Trash } from "lucide-react"

interface CartItem {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface MyOrderProps {
  cartItems: CartItem[];
  onUpdateQuantity: (name: string, delta: number) => void;
  totalPrice: number;
}

function MyOrder({ cartItems, onUpdateQuantity, totalPrice }: MyOrderProps) {
  return (
    <div className="bg-zinc-900 border-y border-r h-[900px] rounded-r-2xl p-4 w-full flex flex-col gap-2">
      <div className="flex justify-between w-full items-center">
        <div className="font-medium text-lg text-white">My Order</div>
        <div className="p-1 px-1.5 text-zinc-400 hover:bg-zinc-800 rounded-md cursor-pointer transition-all duration-200 hover:text-white flex gap-1">
          <MapPin className="w-4 h-4"/>
          <div className="text-xs">Budapest ...</div>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col gap-2 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent h-full">
        {cartItems.length === 0 ? (
          <div className="text-zinc-500 text-center py-4">Your cart is empty</div>
        ) : (
          cartItems.map((item) => (
            <div key={item.name} className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <img src={item.image} alt={item.name} className="w-10 h-10 object-cover rounded-lg" />
                <div className="flex flex-col">
                  <div className="font-medium text-white">{item.name}</div>
                  <div className="text-xs text-zinc-400 font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div 
                  className="w-7 h-7 flex items-center justify-center bg-zinc-800/60 rounded-lg text-zinc-400 cursor-pointer hover:bg-zinc-800 transition-all duration-200"
                  onClick={() => onUpdateQuantity(item.name, -1)}
                >
                  <Minus className="w-3 h-3" />
                </div>
                <div className="font-medium text-white">{item.quantity}</div>
                <div 
                  className="w-7 h-7 flex items-center justify-center bg-zinc-800/60 rounded-lg text-zinc-400 cursor-pointer hover:bg-zinc-800 transition-all duration-200"
                  onClick={() => onUpdateQuantity(item.name, 1)}
                >
                  <Plus className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="flex justify-center items-center font-medium text-white p-2 bg-blue-500/80 hover:bg-blue-500 rounded-lg cursor-pointer transition-all duration-200">
        <div>Checkout for ${totalPrice.toFixed(2)}</div>
      </div>
    </div>
  );
}
export default MyOrder;
