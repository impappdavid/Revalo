import { ArrowRight, ArrowUpRight } from "lucide-react";

function Others() {
    return (
        <>
            <div className="w-76 fixed top-16 flex flex-col gap-4 ">
                <div className="bg-white dark:bg-zinc-900 rounded-xl p-2 border flex flex-col gap-1">
                    <div className="text-sm px-2 py-1 text-black dark:text-white bg-zinc-200/80 dark:bg-zinc-800 rounded-lg">All</div>
                    <div className="text-sm px-2 py-1 text-black dark:text-white hover:bg-zinc-200/80 dark:hover:bg-zinc-800 rounded-lg transition-all duration-200 cursor-pointer">Popular</div>
                    <div className="text-sm px-2 py-1 text-black dark:text-white hover:bg-zinc-200/80 dark:hover:bg-zinc-800 rounded-lg transition-all duration-200 cursor-pointer">Most Recent</div>
                </div>

                <div className="dark:bg-zinc-900 rounded-xl p-2 border flex flex-col gap-1">
                    <div className="text-sm px-2 group py-2 text-black dark:text-white hover:bg-zinc-200/80 dark:hover:bg-zinc-800 rounded-lg transition-all duration-200 cursor-pointer flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                            <img src="https://yt3.googleusercontent.com/i6KNxiy3gME-BulL4WnuGkTGqHuSYF8jl1WRn0rXftcJdSYK7dHKcJ3gLAaPc-KfhmLSYPwf824=s900-c-k-c0x00ffffff-no-rj" alt="linkedin" className="w-8 h-8 rounded-full" />
                            <div className="flex flex-col">
                                <div className="text-sm font-medium">LinkedIn</div>
                                <div className="text-xs text-zinc-600 dark:text-zinc-400">12k member</div>
                            </div>
                        </div>
                        <ArrowRight className="text-zinc-600 dark:text-zinc-400 w-4 h-4 group-hover:-rotate-45 transition-all duration-200" />
                    </div>
                    <div className="text-sm px-2 py-2 group text-black dark:text-white hover:bg-zinc-200/80 dark:hover:bg-zinc-800 rounded-lg transition-all duration-200 cursor-pointer flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAuKrVgOa4BJxUnH4gdJ5TV0m2IFEMjLJ2g&s" alt="Vercel" className="w-8 h-8 rounded-full" />
                            <div className="flex flex-col">
                                <div className="text-sm font-medium">Vercel</div>
                                <div className="text-xs text-zinc-600 dark:text-zinc-400">102k member</div>
                            </div>
                        </div>
                        <ArrowRight className="text-zinc-600 dark:text-zinc-400 w-4 h-4 group-hover:-rotate-45 transition-all duration-200" />
                    </div>
                    <div className="text-sm px-2 py-2 group text-black dark:text-white hover:bg-zinc-200/80 dark:hover:bg-zinc-800 rounded-lg transition-all duration-200 cursor-pointer flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                            <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub" className="w-8 h-8 rounded-full" />
                            <div className="flex flex-col">
                                <div className="text-sm font-medium">GitHub</div>
                                <div className="text-xs text-zinc-600 dark:text-zinc-400">1.2m member</div>
                            </div>
                        </div>

                        <ArrowRight className="text-zinc-600 dark:text-zinc-400 w-4 h-4 group-hover:-rotate-45 transition-all duration-200" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Others;