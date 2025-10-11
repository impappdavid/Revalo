import React from "react"

const data = [
    {
        imageSource: "/images/market5.jpg",
        itemPrice: "$28.99",
        discountedPrice: "15.99",
        itemName: "Used BMW",
        percentage: "50%"
    },
]

function BiggestDiscount() {
    return (
        <>
            <div className="bg-white dark:bg-zinc-900 border rounded-2xl p-4 flex flex-col gap-2">
                <div className="w-full flex justify-between items-center">
                    <div className="font-medium">Biggest Discounts</div>
                    <div className="text-xs text-zinc-700 dark:text-zinc-400 px-3 py-1.5 hover:bg-zinc-200/80 dark:hover:bg-zinc-800/80 cursor-pointer transition-all duration-200 rounded-md hover:text-black dark:hover:text-white">View All</div>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {data.map((item, index) => (
                        <div key={index} className="flex flex-col gap-1 cursor-pointer">
                            <div className="relative">
                                <img src={item.imageSource} alt={item.itemName} loading="lazy" decoding="async" className="rounded-xl w-full h-52 object-cover" />
                                <div className="absolute top-2 right-2 px-2 py-0.5 bg-green-600/50 backdrop-blur-2xl rounded-sm text-xs">
                                    {item.percentage}
                                </div>
                            </div>
                            <div className="flex flex-col px-0.5 w-full">
                                <div className="flex justify-between w-full">

                                    <div className="font-medium text-sm text-green-400">{item.discountedPrice}</div>
                                    <div className="font-medium text-sm line-through text-red-400">{item.itemPrice}</div>
                                </div>
                                <div className="text-xs text-zinc-700 dark:text-zinc-400">{item.itemName}</div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </>
    )
}
export default React.memo(BiggestDiscount)