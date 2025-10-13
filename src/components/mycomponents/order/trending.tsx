import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const data = [
    {
        id: 1,
        img: "/images/foodplace1.jpg",
        name: "McDonald's",
        star: "4.5",
        reviews: "200+",
        distance: "0.5",
        deliveryTime: "15",
        deliveryFee: "0",
    },
    {
        id: 2,
        img: "/images/foodplace2.jpg",
        name: "sOUp's",
        star: "4.2",
        reviews: "200+",
        distance: "1.2",
        deliveryTime: "25",
        deliveryFee: "2",
    },
    {
        id: 3,
        img: "/images/foodplace3.jpg",
        name: "Holiday's",
        star: "5",
        reviews: "86",
        distance: "4.5",
        deliveryTime: "40",
        deliveryFee: "10",
    },
    {
        id: 4,
        img: "/images/foodplace4.jpg",
        name: "GrillIt's",
        star: "5",
        reviews: "24",
        distance: "4.5",
        deliveryTime: "40",
        deliveryFee: "10",
    },
]

function Trending() {
    return (
        <div className="bg-white dark:bg-zinc-900 border rounded-2xl p-4 flex flex-col gap-2">
            <div className="w-full flex justify-between items-center">
                <div className="font-medium">Places that deliver's to you</div>
                <div className="text-xs text-black dark:text-white font-medium transition-all duration-200 rounded-md hover:text-black dark:hover:text-white">{data.length} results</div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3">
                {data.map((item, index) => (
                    <Link to={`/order/${index}`} key={index} className="flex flex-col gap-1 cursor-pointer ">
                        <div className="relative">
                            <img src={item.img} alt={item.name} loading="lazy" decoding="async" className="rounded-xl w-full h-30 object-cover" />

                        </div>
                        <div className="flex flex-col px-0.5 w-full">
                            <div className="flex justify-between w-full">
                                <div className="font-medium text-white">{item.name}</div>
                            </div>
                            <div className="flex gap-1 items-center">
                                <div className="flex gap-0.5 text-xs items-center text-zinc-400 ">
                                    {item.star}
                                    <Star className="w-3.5 h-3.5 fill-zinc-400" />
                                    ({item.reviews})
                                </div>
                                <div className="h-1 w-1 bg-zinc-400 rounded-full"></div>
                                <div className="text-xs text-zinc-400 ">{item.distance} km</div>
                                <div className="h-1 w-1 bg-zinc-400 rounded-full"></div>
                                <div className="text-xs text-zinc-400 ">{item.deliveryTime} min</div>
                            </div>
                            <div className="flex gap-1 items-center">
                                <div className="text-xs text-zinc-400 ">${item.deliveryFee} delivery fee</div>
                            </div>
                        </div>
                    </Link>
                ))}


            </div>
        </div>
    );
}

export default React.memo(Trending);
