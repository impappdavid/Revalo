import { Slider } from "@/components/ui/slider"
import { Mic, Play, Repeat2, Shuffle, SkipBack, SkipForward, Volume } from "lucide-react"
import { useState } from "react";

function FixedPlayer() {
    const [volume, setVolume] = useState(30);
    return (
        <>
            <div className="fixed bottom-2 max-w-[960px] w-full">
                <div className="bg-white dark:bg-zinc-900 p-2 flex justify-between items-center border rounded-2xl">
                    <div className="flex gap-2 items-center w-full max-w-50">
                        <img src="/images/music.jpg" alt="music.jpg" loading="lazy" className="w-12 h-12 rounded-md" />
                        <div className="flex flex-col">
                            <div className="font-medium hover:underline cursor-pointer">Sorry</div>
                            <div className="text-xs text-zinc-600 dark:text-zinc-400 hover:underline hover:text-zinc-900 dark:hover:text-zinc-200 cursor-pointer">The Kid Laroi</div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full px-4 gap-1.5">
                        <div className="flex gap-4 w-full justify-center items-center">
                            <Shuffle className="w-4 h-4  text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-all duration-200 cursor-pointer hover:scale-102" />
                            <SkipBack className="w-5 h-5 fill-zinc-600 dark:fill-zinc-400 text-zinc-600 dark:text-zinc-400 hover:fill-black dark:hover:fill-white hover:text-black dark:hover:text-white transition-all duration-200 cursor-pointer hover:scale-102" />
                            <Play
                                className="w-5 h-5 fill-zinc-600 dark:fill-zinc-400 text-zinc-600 dark:text-zinc-400 hover:fill-black dark:hover:fill-white hover:text-black dark:hover:text-white transition-all duration-200 cursor-pointer hover:scale-102"
                            />
                            <SkipForward className="w-5 h-5 fill-zinc-600 dark:fill-zinc-400 text-zinc-600 dark:text-zinc-400 hover:fill-black dark:hover:fill-white hover:text-black dark:hover:text-white transition-all duration-200 cursor-pointer hover:scale-102" />
                            <Repeat2 className="w-4.5 h-4.5 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-all duration-200 cursor-pointer hover:scale-102" />
                        </div>
                        <div className="flex gap-2">
                            <div className="text-xs text-zinc-600 dark:text-zinc-400">2:32</div>
                            <Slider defaultValue={[0]} value={[232]} max={320} step={1} />
                            <div className="text-xs text-zinc-600 dark:text-zinc-400">3:32</div>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center w-full max-w-50 justify-end">
                        <div className="">
                            <Mic className="w-4 h-4  text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-all duration-200 cursor-pointer hover:scale-102" />
                        </div>
                        <div className="flex items-center">
                            <Volume className="w-4.5 h-4.5 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-all duration-200 cursor-pointer hover:scale-102" />
                            <Slider value={[volume]} max={100} step={1} className="w-16" onValueChange={(v) => setVolume(v[0])} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FixedPlayer