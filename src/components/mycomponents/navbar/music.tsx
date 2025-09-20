import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Slider } from "@/components/ui/slider"
import { Pause, Play, Plus, Repeat, Shuffle, SkipBack, SkipForward, Volume, Volume1, Volume2, VolumeX } from "lucide-react"
import { useState } from "react";

function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(30);
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild >
                    <div className="p-1.5 px-4 hidden md:flex justify-between items-center gap-4 hover:bg-zinc-200/60 dark:hover:bg-zinc-800 rounded-lg transition-all duration-200 cursor-pointer">
                        <div className="flex gap-2 items-center">
                            <SkipBack className="w-4 h-4 fill-zinc-400 text-zinc-400 hover:fill-blue-400 hover:text-blue-400 transition-all duration-200" />
                            {isPlaying ? (
                                <Pause className="w-4 h-4 fill-zinc-400 text-zinc-400 hover:fill-blue-400 hover:text-blue-400 transition-all duration-200" onClick={() => { setIsPlaying(!isPlaying) }} />
                            ) : (
                                <Play className="w-4 h-4 fill-zinc-400 text-zinc-400 hover:fill-blue-400 hover:text-blue-400 transition-all duration-200" onClick={() => { setIsPlaying(!isPlaying) }} />
                            )}
                            <SkipForward className="w-4 h-4 fill-zinc-400 text-zinc-400 hover:fill-blue-400 hover:text-blue-400 transition-all duration-200" />
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="text-xs font-medium">Sorry</div>
                            <div className="">-</div>
                            <div className="text-xs text-zinc-600 dark:text-zinc-400">The Kid Laroi</div>
                        </div>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-2xl max-w-screen-sm rounded-b-xl mt-0.5" align="end" >
                    <DropdownMenuLabel className="w-full flex justify-between px-3 py-2 gap-2 items-center border-b">

                        <div className="flex flex-col w-full gap-1">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2 items-center">
                                    <img src="/images/music.jpg" alt="" className="w-10 h-10 rounded-lg border" />
                                    <div className="flex flex-col">
                                        <div className="text-sm font-medium">Sorry</div>
                                        <div className="text-xs text-zinc-600 dark:text-zinc-400">The Kid Laroi</div>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-center">
                                    <div className="flex gap-2 items-center">
                                        <Plus className="w-4.5 h-4.5 text-zinc-400 hover:text-zinc-300" />
                                        <Shuffle className="w-4 h-4 text-zinc-400 hover:text-zinc-300" />
                                        <Repeat className="w-4 h-4 text-zinc-400 hover:text-zinc-300" />
                                    </div>
                                    <div className="flex gap-2 items-center ">
                                        <SkipBack className="w-4 h-4 fill-zinc-400 text-zinc-400 hover:fill-blue-400 hover:text-blue-400 transition-all duration-200" />
                                        {isPlaying ? (
                                            <Pause className="w-4 h-4 fill-zinc-400 text-zinc-400 hover:fill-blue-400 hover:text-blue-400 transition-all duration-200" onClick={() => { setIsPlaying(!isPlaying) }} />
                                        ) : (
                                            <Play className="w-4 h-4 fill-zinc-400 text-zinc-400 hover:fill-blue-400 hover:text-blue-400 transition-all duration-200" onClick={() => { setIsPlaying(!isPlaying) }} />
                                        )}
                                        <SkipForward className="w-4 h-4 fill-zinc-400 text-zinc-400 hover:fill-blue-400 hover:text-blue-400 transition-all duration-200" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="text-[10px] text-zinc-600 dark:text-zinc-400 pl-0.5">0:00</div>
                                <Slider defaultValue={[0]} max={320} step={1} />
                                <div className="text-[10px] text-zinc-600 dark:text-zinc-400">3:20</div>
                            </div>
                        </div>
                    </DropdownMenuLabel>

                    <div className="max-h-96 h-full overflow-y-auto">
                        <div className="p-1.5 flex justify-between group items-center gap-4 bg-zinc-200/60 dark:bg-zinc-800 transition-all duration-200 cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
                            <div className="flex gap-2">
                                <div className="relative rounded-lg">
                                    <img src="images/music.jpg" alt="" className="w-10 h-10 rounded-lg border" />
                                    <div className="absolute opacity-0 group-hover:opacity-100 w-6 h-6 bg-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center hover:scale-102 transition-all duration-200" >
                                        {isPlaying ? <Pause className="w-3.5 h-3.5 fill-black text-black transition-all duration-200" /> :
                                            <Play className="h-4 w-4 fill-black" />
                                        }
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-sm font-medium">Sorry</div>
                                    <div className="text-xs text-zinc-400">The Kid Laroi</div>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <Plus className="w-4 h-4 text-zinc-400 hover:text-white" />
                                <div className="text-xs text-zinc-400 pr-1.5">3:20</div>
                            </div>
                        </div>

                        <div className="p-1.5 flex justify-between group items-center gap-4 transition-all duration-200 cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
                            <div className="flex gap-2">
                                <div className="relative rounded-lg">
                                    <img src="images/music1.jpg" alt="" className="w-10 h-10 rounded-lg border" />
                                    <div className="absolute opacity-0 group-hover:opacity-100 w-6 h-6 bg-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center hover:scale-102 transition-all duration-200" >
                                        {isPlaying ? <Pause className="w-3.5 h-3.5 fill-black text-black transition-all duration-200" /> :
                                            <Play className="h-4 w-4 fill-black" />
                                        }
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-sm font-medium">Wow.</div>
                                    <div className="text-xs text-zinc-400">Post Malone</div>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <Plus className="w-4 h-4 text-zinc-400 hover:text-white" />
                                <div className="text-xs text-zinc-400 pr-1.5">2:29</div>
                            </div>
                        </div>
                    </div>

                    <div className="p-1.5 flex justify-between group items-center gap-4 transition-all duration-200 cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
                        <div className="flex gap-2">
                            <div className="relative rounded-lg">
                                <img src="images/music4.jpg" alt="" className="w-10 h-10 rounded-lg border" />
                                <div className="absolute opacity-0 group-hover:opacity-100 w-6 h-6 bg-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center hover:scale-102 transition-all duration-200" >
                                    {isPlaying ? <Pause className="w-3.5 h-3.5 fill-black text-black transition-all duration-200" /> :
                                        <Play className="h-4 w-4 fill-black" />
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="text-sm font-medium">Cannonball</div>
                                <div className="text-xs text-zinc-400">Lithe, Don Toliver</div>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <Plus className="w-4 h-4 text-zinc-400 hover:text-white" />
                            <div className="text-xs text-zinc-400 pr-1.5">2:03</div>
                        </div>
                    </div>

                    <div className="p-1.5 flex justify-between group items-center gap-4 transition-all duration-200 cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
                        <div className="flex gap-2">
                            <div className="relative rounded-lg">
                                <img src="images/music5.jpg" alt="" className="w-10 h-10 rounded-lg border" />
                                <div className="absolute opacity-0 group-hover:opacity-100 w-6 h-6 bg-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center hover:scale-102 transition-all duration-200" >
                                    {isPlaying ? <Pause className="w-3.5 h-3.5 fill-black text-black transition-all duration-200" /> :
                                        <Play className="h-4 w-4 fill-black" />
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="text-sm font-medium">Half The Plot</div>
                                <div className="text-xs text-zinc-400">Lil Tecca</div>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <Plus className="w-4 h-4 text-zinc-400 hover:text-white" />
                            <div className="text-xs text-zinc-400 pr-1.5">2:46</div>
                        </div>
                    </div>
                    <DropdownMenuSeparator />
                    <div className="text-xs text-zinc-500 flex items-center gap-2 dark:text-zinc-400 py-2.5 px-3.5  transition-all duration-200">
                        {volume === 0 ? (
                            <VolumeX className="w-4 h-4" />
                        ) : volume < 30 ? (
                            <Volume className="w-4 h-4" />
                        ) : volume < 70 ? (
                            <Volume1 className="w-4 h-4" />
                        ) : (
                            <Volume2 className="w-4 h-4" />
                        )}
                        <Slider
                            value={[volume]}
                            max={100}
                            step={1}
                            onValueChange={(v) => setVolume(v[0])}
                        />
                        <div className="text-xs text-zinc-400">{volume}</div>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
export default MusicPlayer;