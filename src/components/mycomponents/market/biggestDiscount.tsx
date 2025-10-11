function BiggestDiscount() {
    return (
        <>
            <div className="bg-zinc-900 border rounded-2xl p-4 flex flex-col gap-2">
                <div className="w-full flex justify-between items-center">
                    <div className="font-medium">Biggest Discounts</div>
                    <div className="text-xs text-zinc-400 px-3 py-1.5 hover:bg-zinc-800/80 cursor-pointer transition-all duration-200 rounded-md hover:text-white">View All</div>
                </div>

                <div className="grid grid-cols-5 gap-3">
                    <div className="flex flex-col gap-1 cursor-pointer">
                        <div className="relative">
                            <img src="/images/market5.jpg" alt="product.jpg" loading="lazy" className="rounded-xl w-full h-52 object-cover" />
                            <div className="absolute top-2 right-2 px-2 py-0.5 bg-green-500/40 backdrop-blur-2xl rounded-sm text-xs">
                                -50%
                            </div>
                        </div>
                        <div className="flex flex-col px-0.5 w-full">
                            <div className="flex justify-between w-full">

                                <div className="font-medium text-sm text-green-400">$15.99</div>
                                <div className="font-medium text-sm line-through text-red-400">$29.99</div>
                            </div>
                            <div className="text-xs text-zinc-400">Streetwear T-shirt</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default BiggestDiscount