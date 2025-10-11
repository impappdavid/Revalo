import React from "react"

const data = [
    {
        imageSource: "/images/market1.jpg",
        itemPrice: "$14,599.99",
        itemName: "Used BMW",
    },
    {
        imageSource: "/images/market2.jpg",
        itemPrice: "$69.99",
        itemName: "Hoodie",
    },
    {
        imageSource: "/images/market3.jpg",
        itemPrice: "$56,199",
        itemName: "BMW new sport car",
    },
    {
        imageSource: "/images/market4.jpg",
        itemPrice: "$449.99",
        itemName: "Modern Sofa",
    },
    {
        imageSource: "/images/market5.jpg",
        itemPrice: "$28.99",
        itemName: "T-shirt",
    },
    {
        imageSource: "/images/market6.jpg",
        itemPrice: "$499.99",
        itemName: "IPhone 23",
    },
    {
        imageSource: "/images/market7.jpg",
        itemPrice: "$859.99",
        itemName: "MCbook pro",
    },
    {
        imageSource: "/images/market8.jpg",
        itemPrice: "$5.99",
        itemName: "Plants",
    },
    {
        imageSource: "/images/market9.jpg",
        itemPrice: "$49.99",
        itemName: "Table & Chairs",
    },
    {
        imageSource: "/images/market10.jpg",
        itemPrice: "$199.99",
        itemName: "Retro Fridge",
    },
]

function MayBeInteresting() {

    return (
        <>
            <div className="bg-white dark:bg-zinc-900 border rounded-2xl p-4 flex flex-col gap-2">
                <div className="w-full flex justify-between items-center">
                    <div className="font-medium">May be interesting</div>
                    <div className="text-xs text-zinc-700 dark:text-zinc-400 px-3 py-1.5 hover:bg-zinc-200/80 dark:hover:bg-zinc-800/80 cursor-pointer transition-all duration-200 rounded-md hover:text-black dark:hover:text-white">View All</div>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {data.map((item, index) => (
                        <div key={index} className="flex flex-col gap-1 cursor-pointer">
                            <img src={item.imageSource}
                                alt={item.itemName}
                                loading="lazy"
                                decoding="async"
                                className="rounded-xl aspect-[3/4] object-cover w-full" />
                            <div className="flex flex-col px-0.5">
                                <div className="font-medium text-sm">{item.itemPrice}</div>
                                <div className="text-xs text-zinc-700 dark:text-zinc-400">{item.itemName}</div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </>
    )
}
export default React.memo(MayBeInteresting)