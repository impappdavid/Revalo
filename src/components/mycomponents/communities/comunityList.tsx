import { LockOpen, Users } from "lucide-react"

function CommunityList() {
    return (
        <>
            <div className="bg-zinc-900 border p-4 rounded-2xl flex flex-col gap-4">
                <div className="flex justify-between w-full items-center px-1">
                    <div className="font-medium">For you</div>
                    <div className="text-sm text-blue-400 hover:underline cursor-pointer">Show all</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="bg-blue-500 rounded-3xl cursor-pointer">
                        <div className="h-8 rounded-t-xl">
                        </div>
                        <div className="bg-zinc-800 rounded-3xl relative pb-1">
                            <div className="absolute -top-3 left-3">
                                <img src="/logo.png" alt="" className="w-10 h-10 rounded-full border border-sky-500" />
                            </div>
                            <div className="absolute top-2 right-3 flex gap-1">
                                <div className="p-1 bg-zinc-700/80 rounded-full">
                                    <LockOpen className="w-3.5 h-3.5" />
                                </div>
                                <div className="flex gap-1 px-2 py-1 bg-blue-500 rounded-full items-center">
                                    <Users className="w-3.5 h-3.5 text-white" />
                                    <div className="text-xs text-white">84.5k</div>
                                </div>
                            </div>
                            <div className="px-3 py-1 flex flex-col  pt-8">
                                <div className="font-medium text-xl">Revalo</div>
                                <div className="text-xs text-zinc-300">A global community that comes together each day to create their own entertainment</div>
                            </div>

                            <div className="p-1 px-3 flex justify-between">
                                <div className="px-2 py-1 bg-zinc-700/80 w-fit rounded-full text-xs">Lifestyle</div>
                                <div className="px-6 py-1 bg-blue-500 w-fit rounded-full text-xs cursor-pointer hover:bg-blue-500/80">Join</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-emerald-500 rounded-3xl cursor-pointer">
                        <div className="h-8 rounded-t-xl">
                        </div>
                        <div className="bg-zinc-800 rounded-3xl relative pb-1">
                            <div className="absolute -top-3 left-3">
                                <img src="/logo.png" alt="" className="w-10 h-10 rounded-full border border-sky-500" />
                            </div>
                            <div className="absolute top-2 right-3 flex gap-1">
                                <div className="p-1 bg-zinc-700/80 rounded-full">
                                    <LockOpen className="w-3.5 h-3.5" />
                                </div>
                                <div className="flex gap-1 px-2 py-1 bg-blue-500 rounded-full items-center">
                                    <Users className="w-3.5 h-3.5 text-white" />
                                    <div className="text-xs text-white">1.5k</div>
                                </div>
                            </div>
                            <div className="px-3 py-1 flex flex-col  pt-8">
                                <div className="font-medium text-xl">ProjectHub</div>
                                <div className="text-xs text-zinc-300">A global community that comes together each day to create their own entertainment</div>
                            </div>

                            <div className="p-1 px-3 flex justify-between">
                                <div className="px-2 py-1 bg-zinc-700/80 w-fit rounded-full text-xs">Developers</div>
                                <div className="px-6 py-1 bg-blue-500 w-fit rounded-full text-xs cursor-pointer hover:bg-blue-500/80">Join</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CommunityList