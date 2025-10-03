import { BadgeCheck, ExternalLink, Users } from "lucide-react"

function CommunityList() {
    return (
        <>

            <div className="bg-white dark:bg-zinc-900 border p-4 rounded-2xl flex flex-col gap-4">
                <div className="flex justify-between w-full items-center px-1">
                    <div className="font-medium text-xl">For you</div>
                    <div className="text-sm text-blue-500 dark:text-blue-400 hover:underline cursor-pointer">Show all</div>
                </div>
                <div className="grid grid-cols-4 gap-2">


                    <CommunityCard />



                </div>
            </div>
        </>
    )
}

function CommunityCard() {
    return (
        <>
            <div className="flex flex-col gap-1 bg-zinc-200/80 dark:bg-zinc-800/80 rounded-xl cursor-pointer">
                <div className="relative">
                    <img src="https://cdn-images.dzcdn.net/images/cover/7f3f001774806c8d3e62b42cc41a5a2e/500x500.jpg" alt="yeat.jpg" loading="lazy" className="rounded-t-xl" />
                    <div className="absolute bottom-2 left-2">
                        <div className="px-2 py-0.5 bg-zinc-900/80 text-white rounded-full text-xs">
                            134k follower
                        </div>
                    </div>
                </div>
                <div className="px-2 flex flex-col pb-0.5 leading-tight">
                    <div className="flex gap-1 items-center">
                        <div className="font-medium">Yeat</div>
                        <BadgeCheck className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                    </div>
                    <div className="text-xs text-zinc-600 dark:text-zinc-400">Music</div>
                </div>
                <div className="px-1 pb-1.5">
                    <div className="py-1 flex justify-center items-center bg-white text-black rounded-lg text-sm font-medium hover:bg-white/80 transition-all duration-200 cursor-pointer">Follow</div>
                </div>
            </div>

            <div className="flex flex-col gap-1 bg-zinc-200/80 dark:bg-zinc-800/80 rounded-xl cursor-pointer">
                <div className="relative">
                    <img src="https://pbs.twimg.com/media/Eul9X68XcAATOUs.jpg" alt="yeat.jpg" loading="lazy" className="rounded-t-xl" />
                    <div className="absolute bottom-2 left-2">
                        <div className="px-2 py-0.5 bg-zinc-900/80 text-white rounded-full text-xs">
                            1.2m follower
                        </div>
                    </div>
                </div>
                <div className="px-2 flex flex-col pb-0.5 leading-tight">
                    <div className="flex gap-1 items-center">
                        <div className="font-medium">The Kid Laroi</div>
                        <BadgeCheck className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                    </div>
                    <div className="text-xs text-zinc-600 dark:text-zinc-400">Music</div>
                </div>
                <div className="px-1 pb-1.5">
                    <div className="py-1 flex justify-center items-center bg-white text-black rounded-lg text-sm font-medium hover:bg-white/80 transition-all duration-200 cursor-pointer">Follow</div>
                </div>
            </div>
        </>
    )
}
export default CommunityList