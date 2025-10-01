import { ExternalLink, Users } from "lucide-react"

function CommunityList() {
    return (
        <>
        
            <div className="bg-zinc-900 border p-4 rounded-2xl flex flex-col gap-4">
                <div className="flex justify-between w-full items-center px-1">
                    <div className="font-medium text-xl">For you</div>
                    <div className="text-sm text-blue-400 hover:underline cursor-pointer">Show all</div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 auto-rows-fr items-stretch">

                    <div className="flex flex-col h-full">
                        <div className="min-h-14 rounded-t-2xl bg-blue-600">
                        </div>
                        <div className="bg-zinc-800 rounded-b-2xl relative pb-1 h-full">
                            <div className="absolute -top-9 left-1.5">
                                <img src="/logo.png" alt="" className="w-16 h-16 rounded-2xl " />
                            </div>
                            <div className="absolute top-1.5 right-1.5 flex gap-1">
                                <div className="flex gap-1 items-center py-1 px-2 bg-zinc-700/60 rounded-full">
                                    <Users className="w-3.5 h-3.5 text-zinc-300" />
                                    <div className="text-xs text-zinc-300">84.5k</div>
                                </div>
                            </div>
                            <div className="px-2 py-1 flex flex-col gap-0.5 pt-8">
                                <div className="flex gap-1 group items-center cursor-pointer w-fit">
                                    <div className="font-medium text-xl group-hover:underline">Revalo</div>
                                    <ExternalLink className="opacity-0 w-4 h-4 text-zinc-400 group-hover:opacity-100 transition-all duration-200" />
                                </div>
                                <div className="text-xs text-zinc-300 leading-tight">A global community that comes together each day to create their own entertainment</div>
                            </div>
                            <div className="p-1 px-2 w-full">
                                <div className="flex gap-1 justify-center px-6 py-1.5 bg-red-600/80 rounded-full items-center cursor-pointer hover:bg-red-600/60 transition-all duration-200">
                                    <div className="text-sm text-white">Leave</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" flex flex-col h-full">
                        <div className="min-h-14 rounded-t-2xl bg-emerald-600">
                        </div>
                        <div className="bg-zinc-800 rounded-b-2xl relative pb-1 h-full">
                            <div className="absolute -top-9 left-1.5">
                                <img src="/images/music.jpg" alt="" className="w-16 h-16 rounded-2xl " />
                            </div>
                            <div className="absolute top-1.5 right-1.5 flex gap-1">
                                <div className="flex gap-1 items-center py-1 px-2 bg-zinc-700/60 rounded-full">
                                    <Users className="w-3.5 h-3.5 text-zinc-300" />
                                    <div className="text-xs text-zinc-300">1.5k</div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between h-full">
                                <div className="">
                                    <div className="px-2 py-1 flex flex-col gap-0.5 pt-8">
                                        <div className="flex gap-1 group items-center cursor-pointer w-fit">
                                            <div className="font-medium text-xl group-hover:underline">ProjectHub</div>
                                            <ExternalLink className="opacity-0 w-4 h-4 text-zinc-400 group-hover:opacity-100 transition-all duration-200" />
                                        </div>
                                        <div className="text-xs text-zinc-300 leading-tight">Search nearby parties and share nearby parties. Make you life fun.</div>
                                    </div>
                                </div>
                                <div className="p-1 px-2 w-full">
                                    <div className="flex gap-1 justify-center px-6 py-1.5 bg-blue-500 rounded-full items-center cursor-pointer hover:bg-blue-500/80 transition-all duration-200">
                                        <div className="text-sm text-white">Join</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
export default CommunityList