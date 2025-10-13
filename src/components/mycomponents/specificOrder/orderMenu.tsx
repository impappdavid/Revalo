// Updated OrderMenu.tsx
import { Input } from "@/components/ui/input"
import { ArrowLeft, Ellipsis, Heart, Plus, Search, Star, Truck } from "lucide-react"
import { Link } from "react-router-dom"

interface MenuItem {
  name: string;
  price: number;
  image: string;
}

interface OrderMenuProps {
  onAddToCart: (item: Omit<MenuItem, 'quantity'>) => void;
}

function OrderMenu({ onAddToCart }: OrderMenuProps) {
  const menuItems: MenuItem[] = [
    { name: "McMenu", price: 12.99, image: "/images/mcmenu.jpeg" },
    { name: "WrapMenu", price: 15.99, image: "/images/WrapMenu.jpeg" },
    { name: "BigMac", price: 7.99, image: "/images/bigmac.jpeg" },
    { name: "Cheeseburger", price: 5.99, image: "/images/cheeseburger.jpg" }
  ];

  return (
    <div className="bg-zinc-900 border rounded-l-2xl min-h-[900px]">
      <div className="flex justify-between p-2">
        <div className="flex items-center gap-2">
          <Link to={"/order"} className="p-2 hover:bg-zinc-800/80 rounded-lg cursor-pointer transition-all duration-200">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div className="font-medium text-white">McDonald's</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-xs flex gap-1 items-center">
            <Truck className="w-4 h-4 text-zinc-400" />
            <div className="text-xs text-zinc-400">20 min</div>
          </div>
          <div className="flex items-center">
            <div className="p-2 hover:bg-zinc-800/80 rounded-lg text-zinc-400 cursor-pointer transition-all duration-200">
              <Star className="w-4 h-4 " />
            </div>
            <div className="p-2 hover:bg-zinc-800/80 rounded-lg text-zinc-400 cursor-pointer transition-all duration-200">
              <Ellipsis className="w-4 h-4 " />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <img src="/images/mcdonalds.png" alt="mcdonalds.png" />
        <div className="p-4 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="relative w-full">
              <Search className="pointer-events-none absolute left-2 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search foods"
                className="pl-9 w-full h-9 border-none rounded-lg bg-zinc-200/60 hover:bg-zinc-200 dark:bg-zinc-800/60 dark:hover:bg-zinc-800 transition-all duration-200"
              />
            </div>
            <div className="p-2.5 bg-zinc-800/60 hover:bg-zinc-800 rounded-lg text-zinc-400 cursor-pointer transition-all duration-200">
              <Heart className="w-4 h-4 " />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-medium">Featured Items</div>
            <div className="grid grid-cols-5 gap-2">
              {menuItems.map((item) => (
                <div key={item.name} className="flex flex-col gap-0.5">
                  <div className="relative">
                    <img src={item.image} alt={item.name} className="aspect-square object-cover rounded-xl" />
                    <div 
                      className="p-2 rounded-full bg-blue-500/80 text-xs backdrop-blur-2xl font-medium absolute bottom-1 right-1 cursor-pointer hover:bg-blue-500 transition-all duration-200"
                      onClick={() => onAddToCart(item)}
                    >
                      <Plus className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex flex-col px-0.5">
                    <div className="font-medium text-sm">{item.name}</div>
                    <div className="text-xs text-zinc-400 font-medium">${item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OrderMenu;
