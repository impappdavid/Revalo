// Updated OrderMenu.tsx
import { Input } from "@/components/ui/input"
import { ArrowLeft, Heart, MapPin, Plus, Search, Star, Truck } from "lucide-react"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"


import DropDown from "./review";

interface MenuItem {
  name: string;
  price: number;
  image: string;
  liked?: boolean;
}

interface OrderMenuProps {
  onAddToCart: (item: Omit<MenuItem, 'quantity'>) => void;
}

function OrderMenu({ onAddToCart }: OrderMenuProps) {
  const menuItems: MenuItem[] = [
    { name: "McMenu", price: 12.99, image: "/images/mcmenu.jpeg", liked: true, },
    { name: "WrapMenu", price: 15.99, image: "/images/WrapMenu.jpeg", liked: false, },
    { name: "BigMac", price: 7.99, image: "/images/bigmac.jpeg", liked: false, },
    { name: "Cheeseburger", price: 5.99, image: "/images/cheeseburger.jpg", liked: false, }
  ];

  useEffect(() => {
    document.title = "Revalo - McDonald's";

    if (searchValue.length > 0) {
      const filteredItems = menuItems.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
      console.log("Filtered Items:", filteredItems);
    }
  }, []);

  const [isMyFavorite, setIsMyFavorite] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [showFavoriteOnly, setShowFavoriteOnly] = useState(false);

  return (
    <div className="bg-white dark:bg-zinc-900 border rounded-l-2xl min-h-[900px] w-full">
      <div className="flex justify-between p-2">
        <div className="flex items-center gap-2">
          <Link to={"/order"} className="p-2 hover:bg-zinc-200/80 dark:hover:bg-zinc-800/80 rounded-lg cursor-pointer transition-all duration-200">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div className="font-medium text-black dark:text-white">McDonald's</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-xs flex gap-1 items-center">
            <Truck className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
            <div className="text-xs text-zinc-600 dark:text-zinc-400">20 min</div>
          </div>
          <div className="flex items-center">
            <div className={`p-2 hover:bg-zinc-200/80 dark:hover:bg-zinc-800/80 rounded-lg  cursor-pointer transition-all duration-200 ${isMyFavorite ? 'text-yellow-500' : 'text-zinc-400'}`} onClick={() => setIsMyFavorite(!isMyFavorite)}>
              <Star className={`w-4 h-4 ${isMyFavorite ? 'fill-yellow-500 ' : 'fill-none'}`} />
            </div>
            <DropDown />
            
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="relative">
          <img src="/images/mcdonalds.png" loading="lazy" alt="mcdonalds.png" />
          <div className="p-1 flex absolute bottom-1 right-1 backdrop-blur-2xl rounded-2xl">
            <div className="bg-zinc-800/60 backdrop-blur-2xl rounded-full px-3 py-1 flex items-center gap-1 text-xs text-white font-medium">
              <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
              4.9
              <span className="text-zinc-300 font-normal">(200+)</span>
            </div>
            <div className="bg-zinc-800/60 backdrop-blur-2xl rounded-full px-3 py-1 flex items-center gap-1 text-xs text-white font-medium ml-2">
              <MapPin className="w-3 h-3" />
              3.7 km
            </div>
            <div className="bg-zinc-800/60 backdrop-blur-2xl rounded-full px-3 py-1 flex items-center gap-1 text-xs text-white font-medium ml-2">
              <Truck className="w-3 h-3" />
              Free Delivery
            </div>

          </div>
        </div>
        <div className="p-4 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="relative w-full">
              <Search className="pointer-events-none absolute left-2 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search foods"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="pl-9 w-full h-9 border-none rounded-lg bg-zinc-200/60 hover:bg-zinc-200 dark:bg-zinc-800/60 dark:hover:bg-zinc-800 transition-all duration-200"
              />
            </div>
            <div className={`p-2.5   rounded-lg  cursor-pointer transition-all duration-200 ${showFavoriteOnly ? "bg-pink-500 text-white hover:bg-pink-500/80" : "bg-zinc-200/80 dark:bg-zinc-800/60 text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800"}`} onClick={() => setShowFavoriteOnly(!showFavoriteOnly)}>
              <Heart className="w-4 h-4 " />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <div className={`font-medium ${searchValue.length > 0 ? "hidden" : "flex"}`}>Featured Items</div>
            <div className="grid grid-cols-5 gap-2 w-full">

              {searchValue.length > 0 ? (
                menuItems
                  .filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))

                  .map((item) => (
                    <>
                      {showFavoriteOnly && !item.liked ? (
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
                            <div className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">${item.price}</div>
                          </div>
                        </div>
                      ) : (

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
                            <div className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">${item.price}</div>
                          </div>
                        </div>
                      )}
                    </>

                  ))
              ) : showFavoriteOnly === true ? (
                menuItems
                  .filter(item => item.liked)
                  .map((item) => (
                    <div key={item.name} className="flex flex-col gap-0.5">
                      <div className="relative">
                        <img src={item.image} alt={item.name} loading="lazy" className="aspect-square object-cover rounded-xl" />
                        <div
                          className="p-2 rounded-full bg-blue-500/80 text-xs backdrop-blur-2xl font-medium absolute bottom-1 right-1 cursor-pointer hover:bg-blue-500 transition-all duration-200"
                          onClick={() => onAddToCart(item)}
                        >
                          <Plus className="w-4 h-4 text-white" />
                        </div>
                        <div
                          className={`p-2 rounded-full  text-xs backdrop-blur-sm font-medium absolute bottom-1 left-1 cursor-pointer hover:bg-pink-500 text-pink-500 hover:text-white transition-all duration-200 ${item.liked ? 'bg-pink-500 text-white' : 'bg-zinc-900/10'}`}
                        >
                          <Heart className="w-4 h-4 " />
                        </div>
                      </div>
                      <div className="flex flex-col px-0.5">
                        <div className="font-medium text-sm">{item.name}</div>
                        <div className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">${item.price}</div>
                      </div>
                    </div>
                  ))
              ) : (
                <>
                  {menuItems.map((item) => (
                    <div key={item.name} className="flex flex-col gap-0.5">
                      <div className="relative">
                        <img src={item.image} alt={item.name} loading="lazy" className="aspect-square object-cover rounded-xl" />
                        <div
                          className="p-2 rounded-full bg-blue-500/80 text-xs backdrop-blur-2xl font-medium absolute bottom-1 right-1 cursor-pointer hover:bg-blue-500 transition-all duration-200"
                          onClick={() => onAddToCart(item)}
                        >
                          <Plus className="w-4 h-4 text-white" />
                        </div>

                        <div
                          className={`p-2 rounded-full  text-xs backdrop-blur-sm font-medium absolute bottom-1 left-1 cursor-pointer hover:bg-pink-500 text-pink-500 hover:text-white transition-all duration-200 ${item.liked ? 'bg-pink-500 text-white' : 'bg-zinc-900/10'}`}

                        >
                          <Heart className="w-4 h-4 " />
                        </div>
                      </div>
                      <div className="flex flex-col px-0.5">
                        <div className="font-medium text-sm">{item.name}</div>
                        <div className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">${item.price}</div>
                      </div>
                    </div>
                  ))}
                </>

              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OrderMenu;
