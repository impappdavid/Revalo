import { EllipsisVertical, Heart, MessageSquare } from "lucide-react"

function Posts() {
    return (
        <>
            <div className="flex flex-col gap-2 bg-white dark:bg-zinc-900/60 rounded-xl border dark:border-zinc-800 ">
                <div className="flex flex-col p-4 gap-2">
                    <div className="flex gap-2 items-center justify-between">
                        <div className="flex gap-2 items-center">
                            <img src="/images/profile.jpg" alt="profile.jpg" className="w-10 h-10 rounded-full" />
                            <div className="flex flex-col">
                                <div className="text-sm font-medium">Gillbert Hann</div>
                                <div className="text-xs text-zinc-600 dark:text-zinc-400">8k followers</div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="py-1 px-3 text-sm bg-blue-500 rounded-lg cursor-pointer text-white">Follow</div>
                            <div className="py-1.5 px-1.5 dark:hover:bg-zinc-800 hover:bg-zinc-300/80 rounded-md cursor-pointer transition-all duration-200">
                                <EllipsisVertical className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
                            </div>
                        </div>
                    </div>
                    <div className="pl-12">This social media platform is fire.</div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-1">
                            <div className="flex gap-1 group dark:hover:bg-zinc-800 hover:bg-zinc-300/80 p-1.5 px-3 rounded-lg cursor-pointer transition-all duration-200 items-center">
                                <Heart className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:text-red-500 transition-all duration-200" />
                                <div className="text-xs text-zinc-600 dark:text-zinc-400">22</div>
                            </div>
                            <div className="flex gap-1 group dark:hover:bg-zinc-800 hover:bg-zinc-300/80 p-1.5 px-3 rounded-lg cursor-pointer transition-all duration-200 items-center">
                                <MessageSquare className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:text-sky-500 transition-all duration-200" />
                                <div className="text-xs text-zinc-600 dark:text-zinc-400">22</div>
                            </div>
                        </div>
                        <div className="text-xs text-zinc-600 dark:text-zinc-400 hover:underline">2d ago</div>
                    </div>
                </div>

                <div className="h-0.5 dark:bg-zinc-800 bg-zinc-200/80"></div>

                <div className="flex flex-col  gap-2">
                    <div className="flex gap-2 pt-4 px-4 pb-2 items-center justify-between">
                        <div className="flex gap-2 items-center">
                            <img src="/images/profile.jpg" alt="profile.jpg" className="w-10 h-10 rounded-full" />
                            <div className="flex flex-col">
                                <div className="text-sm font-medium">Gillbert Hann</div>
                                <div className="text-xs text-zinc-600 dark:text-zinc-400">8k followers</div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="py-1 px-3 text-sm bg-blue-500 rounded-lg text-white cursor-pointer">Follow</div>
                            <div className="py-1.5 px-1.5 dark:hover:bg-zinc-800 hover:bg-zinc-300/80 rounded-md cursor-pointer transition-all duration-200">
                                <EllipsisVertical className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
                            </div>
                        </div>
                    </div>
                    <img src="images/profile.jpg" alt="" />
                    <div className="flex justify-between items-center px-4 pt-2 pb-4">
                        <div className="flex gap-1">
                            <div className="flex gap-1 group dark:hover:bg-zinc-800 hover:bg-zinc-300/80 p-1.5 px-3 rounded-lg cursor-pointer transition-all duration-200 items-center">
                                <Heart className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:text-red-500 transition-all duration-200" />
                                <div className="text-xs text-zinc-600 dark:text-zinc-400">22</div>
                            </div>
                            <div className="flex gap-1 group dark:hover:bg-zinc-800 hover:bg-zinc-300/80 p-1.5 px-3 rounded-lg cursor-pointer transition-all duration-200 items-center">
                                <MessageSquare className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:text-sky-500 transition-all duration-200" />
                                <div className="text-xs text-zinc-600 dark:text-zinc-400">22</div>
                            </div>
                        </div>
                        <div className="text-xs text-zinc-600 dark:text-zinc-400 hover:underline">2d ago</div>
                    </div>
                </div>

                <div className="h-0.5 dark:bg-zinc-800 bg-zinc-200/80"></div>

                <div className="flex flex-col  gap-2">
                    <div className="flex gap-2 pt-4 px-4 pb-2 items-center justify-between">
                        <div className="flex gap-2 items-center">
                            <img src="/images/profile2.jpg" alt="profile.jpg" className="w-10 h-10 rounded-full" />
                            <div className="flex flex-col">
                                <div className="text-sm font-medium">Adam Chile</div>
                                <div className="text-xs text-zinc-600 dark:text-zinc-400">160k followers</div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="py-1 px-3 text-sm bg-blue-500 rounded-lg text-white cursor-pointer">Follow</div>
                            <div className="py-1.5 px-1.5 dark:hover:bg-zinc-800 hover:bg-zinc-300/80 rounded-md cursor-pointer transition-all duration-200">
                                <EllipsisVertical className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-0.5">
                        <img src="images/restaurant.jpg" alt="" className="object-cover aspect-square"/>
                        <img src="images/food.jpg" alt="" className="object-cover aspect-square"/>
                    </div>
                    <div className="flex justify-between items-center px-4 pt-2 pb-4">
                        <div className="flex gap-1">
                            <div className="flex gap-1 group dark:hover:bg-zinc-800 hover:bg-zinc-300/80 p-1.5 px-3 rounded-lg cursor-pointer transition-all duration-200 items-center">
                                <Heart className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:text-red-500 transition-all duration-200" />
                                <div className="text-xs text-zinc-600 dark:text-zinc-400">10k</div>
                            </div>
                            <div className="flex gap-1 group dark:hover:bg-zinc-800 hover:bg-zinc-300/80 p-1.5 px-3 rounded-lg cursor-pointer transition-all duration-200 items-center">
                                <MessageSquare className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:text-sky-500 transition-all duration-200" />
                                <div className="text-xs text-zinc-600 dark:text-zinc-400">1.2k</div>
                            </div>
                        </div>
                        <div className="text-xs text-zinc-600 dark:text-zinc-400 hover:underline">2d ago</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Posts