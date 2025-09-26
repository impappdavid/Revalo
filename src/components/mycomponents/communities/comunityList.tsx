function CommunityList() {
    return (
        <>
            <div className="bg-zinc-900 border p-4 rounded-2xl flex flex-col gap-4">
                <div className="flex justify-between w-full items-center">
                    <div className="font-medium">For you</div>
                    <div className="text-sm text-blue-400 hover:underline cursor-pointer">Show all</div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    <div className="bg-zinc-800/80 border rounded-xl">
                        <div className="relative">
                            <img src="/images/food.jpg" alt="" className="rounded-t-xl h-40 w-full" />
                            <div className="px-2 py-1 bg-black/60 backdropblue-2xl absolute top-2 right-2 rounded-full text-xs font-medium">18k member</div>
                        </div>
                        <div className="px-2 py-1 flex flex-col">
                            <div className="font-medium">Revalo</div>
                            <div className="text-xs text-zinc-400">Marketing</div>
                        </div>
                        <div className="p-1">
                            <div className="w-full py-1 bg-white text-black rounded-lg flex justify-center items-center text-sm font-medium cursor-pointer hover:bg-white/80 transition-all duration-200">Join Group</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CommunityList