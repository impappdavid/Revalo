function TopSellers() {
    return (
        <>
            <div className="bg-zinc-900 border rounded-2xl p-4 flex flex-col gap-2">
                <div className="w-full flex justify-between items-center">
                    <div className="font-medium">Top Sellers</div>
                    <div className="text-xs text-zinc-400 px-3 py-1.5 hover:bg-zinc-800/80 cursor-pointer transition-all duration-200 rounded-md hover:text-white">View All</div>
                </div>

                <div className="grid grid-cols-5 gap-3">
                    <div className="flex flex-col gap-1  cursor-pointer">
                        <img src="/images/market1.jpg" alt="product.jpg" loading="lazy" className="rounded-xl h-52 object-fit" />
                        <div className="flex flex-col px-0.5">
                            <div className="font-medium text-sm">$59.99</div>
                            <div className="text-xs text-zinc-400">Streetwear T-shirt</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 cursor-pointer">
                        <img src="/images/market2.jpg" alt="product.jpg" loading="lazy" className="rounded-xl h-52 object-fit" />
                        <div className="flex flex-col px-0.5">
                            <div className="font-medium text-sm">$9.99</div>
                            <div className="text-xs text-zinc-400">Plain White T-shirt</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TopSellers