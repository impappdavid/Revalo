import { ExternalLink, Users } from "lucide-react"

function CommunityList() {
    return (
        <>

            <div className="bg-white dark:bg-zinc-900 border p-4 rounded-2xl flex flex-col gap-4">
                <div className="flex justify-between w-full items-center px-1">
                    <div className="font-medium text-xl">For you</div>
                    <div className="text-sm text-blue-500 dark:text-blue-400 hover:underline cursor-pointer">Show all</div>
                </div>
                <div className="flex flex-col gap-2">

                    <div className="p-2 flex justify-between items-center border rounded-2xl">
                        <div className="flex gap-2 items-center">
                            <img src="/logo.png" alt="logo" className="w-12 h-12 rounded-xl" />
                            <div className="flex flex-col">
                                <div className="flex gap-2 items-center">
                                    <div className="text-xl">Revalo</div>
                                    
                                </div>
                                <div className="max-w-sm truncate text-xs text-zinc-600 dark:text-zinc-400">
                                    A global community that comes together each day to create their own entertainment
                                </div>
                            </div>
                        </div>
                        <div className=" flex justify-center items-center bg-blue-500 w-16 h-12 text-white cursor-pointer hover:bg-blue-500/80 transition-all duration-200 rounded-xl">Join</div>
                    </div>

                    <div className="p-2 flex justify-between items-center border rounded-2xl">
                        <div className="flex gap-2 items-center">
                            <img src="/logo.png" alt="logo" className="w-12 h-12 rounded-xl" />
                            <div className="flex flex-col">
                                <div className="flex gap-2 items-center">
                                    <div className="text-xl">RevaloPlus</div>
                                    
                                </div>
                                <div className="max-w-sm truncate text-xs text-zinc-600 dark:text-zinc-400">
                                    A global community that comes together each day to create their own entertainment
                                </div>
                            </div>
                        </div>
                        <div className=" flex justify-center items-center bg-red-500 w-16 h-12 text-white cursor-pointer hover:bg-red-500/80 transition-all duration-200 rounded-xl">Leave</div>
                    </div>



                </div>
            </div>
        </>
    )
}
export default CommunityList