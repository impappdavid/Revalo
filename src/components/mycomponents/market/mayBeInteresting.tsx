function MayBeInteresting() {
    return (
        <>
            <div className="bg-zinc-900 border rounded-2xl p-4 flex flex-col gap-2">
                <div className="w-full flex justify-between items-center">
                    <div className="font-medium">May be interesting</div>
                    <div className="text-xs text-zinc-400 px-3 py-1.5 hover:bg-zinc-800/80 cursor-pointer transition-all duration-200 rounded-md hover:text-white">View All</div>
                </div>

                <div className="grid grid-cols-5 gap-3">
                    <div className="flex flex-col gap-1 hover:opacity-80 transition-all duration-200 cursor-pointer">
                        <img src="/images/market1.jpg" alt="product.jpg" loading="lazy" className="rounded-xl h-52 object-cover" />
                        <div className="flex flex-col px-0.5">
                            <div className="font-medium text-sm">$59.99</div>
                            <div className="text-xs text-zinc-400">Streetwear T-shirt</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 hover:opacity-80 transition-all duration-200 cursor-pointer">
                        <img src="/images/market2.jpg" alt="product.jpg" loading="lazy" className="rounded-xl h-52 object-cover" />
                        <div className="flex flex-col px-0.5">
                            <div className="font-medium text-sm">$9.99</div>
                            <div className="text-xs text-zinc-400">Plain White T-shirt</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 hover:opacity-80 transition-all duration-200 cursor-pointer">
                        <img src="/images/market3.jpg" alt="product.jpg" loading="lazy" className="rounded-xl h-52 object-cover" />
                        <div className="flex flex-col px-0.5">
                            <div className="font-medium text-sm">$56,199</div>
                            <div className="text-xs text-zinc-400">BMW new sport car</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 hover:opacity-80 transition-all duration-200 cursor-pointer">
                        <img src="/images/market4.jpg" alt="product.jpg" loading="lazy" className="rounded-xl h-52 object-cover" />
                        <div className="flex flex-col px-0.5">
                            <div className="font-medium text-sm">$449.99</div>
                            <div className="text-xs text-zinc-400">Modern Sofa</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 hover:opacity-80 transition-all duration-200 cursor-pointer">
                        <img src="/images/market5.jpg" alt="product.jpg" loading="lazy" className="rounded-xl h-52 object-cover" />
                        <div className="flex flex-col px-0.5">
                            <div className="font-medium text-sm">$44,000</div>
                            <div className="text-xs text-zinc-400">BMW new sport car</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 hover:opacity-80 transition-all duration-200 cursor-pointer">
                        <img src="/images/market6.jpg" alt="product.jpg" loading="lazy" className="rounded-xl h-52 object-cover" />
                        <div className="flex flex-col px-0.5">
                            <div className="font-medium text-sm">$499.99</div>
                            <div className="text-xs text-zinc-400">IPhone 12</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 hover:opacity-80 transition-all duration-200 cursor-pointer">
                        <img src="/images/market7.jpg" alt="product.jpg" loading="lazy" className="rounded-xl h-52 object-cover" />
                        <div className="flex flex-col px-0.5">
                            <div className="font-medium text-sm">$859.99</div>
                            <div className="text-xs text-zinc-400">MCbook</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 hover:opacity-80 transition-all duration-200 cursor-pointer">
                        <img src="/images/market8.jpg" alt="product.jpg" loading="lazy" className="rounded-xl h-52 object-cover" />
                        <div className="flex flex-col px-0.5">
                            <div className="font-medium text-sm">$5.99</div>
                            <div className="text-xs text-zinc-400">Plants</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 hover:opacity-80 transition-all duration-200 cursor-pointer">
                        <img src="/images/market9.jpg" alt="product.jpg" loading="lazy" className="rounded-xl h-52 object-cover" />
                        <div className="flex flex-col px-0.5">
                            <div className="font-medium text-sm">$49.99</div>
                            <div className="text-xs text-zinc-400">Table & Charirs</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 hover:opacity-80 transition-all duration-200 cursor-pointer">
                        <img src="/images/market10.jpg" alt="product.jpg" loading="lazy" className="rounded-xl h-52 object-cover" />
                        <div className="flex flex-col px-0.5">
                            <div className="font-medium text-sm">$199.99</div>
                            <div className="text-xs text-zinc-400">Fridge</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MayBeInteresting