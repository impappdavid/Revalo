import { Input } from "@/components/ui/input"
import { AtSign, Bell, VolumeX, Volume2, Check, CircleQuestionMark, LogOut, Palette, Pause, Play, Plus, Repeat, Search, Settings, Shuffle, SkipBack, SkipForward, TriangleAlert, User, Volume1, Volume } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { useTheme } from "./theme-provider"
import { Slider } from "@/components/ui/slider"
import MusicPlayer from "./navbar/music"

function Navbar() {
    const { theme, setTheme } = useTheme()
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(30);
    const current = (theme ?? "system") as "light" | "dark" | "system"

    const Option = ({
        value,
        label,
    }: {
        value: "light" | "dark" | "system"
        label: string
    }) => (
        <DropdownMenuItem
            className="flex items-center gap-2 py-1 px-3 cursor-pointer" // add right padding for the check
            onSelect={(e) => {
                e.preventDefault() // keep parent menu open
                setTheme(value)
            }}
        >
            <span className="capitalize">{label}</span>
            {current === value ? (
                <div className="w-full flex justify-end">
                    <Check className=" h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
            ) : (
                <span className="ml-auto h-4 w-4" />
            )}
        </DropdownMenuItem>
    )

    return (
        <>
            <div className="w-full flex justify-center dark:bg-zinc-900 bg-white shadow-xs sticky top-0 z-50">
                <div className="w-full max-w-6xl flex items-center gap-4">
                    <div className="w-full max-w-40 p-1.5 pl-3">
                        <img src="/logo.png" alt="" className="w-8 h-8 rounded-lg hover:cursor-pointer hover:scale-95 transition-all duration-200" />
                    </div>
                    <div className="w-full flex justify-between gap-4 items-center p-1.5">
                        <div className="relative">
                            <Search className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search"
                                className="pl-10 max-w-64 w-full h-8 border-none rounded-lg bg-zinc-200/60 hover:bg-zinc-200 dark:bg-zinc-800/60 dark:hover:bg-zinc-800 transition-all duration-200"
                            />
                        </div>
                        <MusicPlayer />                        
                    </div>
                    <div className="w-full max-w-76 flex justify-end items-center gap-2 pr-2">

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild >
                                <div className={`hover:bg-zinc-200/60 dark:hover:bg-zinc-800 p-2 transition-all rounded-lg duration-200 cursor-pointer hover:scale-95 transition-all duration-200`} >
                                    <Bell className="w-4 h-4 text-zinc-400" />
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-86 rounded-xl" align="end" >
                                <DropdownMenuLabel className="w-full flex justify-between px-3 py-2 items-center border-b">
                                    Notifications
                                    <Settings className="w-4 h-4 text-zinc-400 hover:text-zinc-500 cursor-pointer hover:rotate-90 transition-all duration-200" />
                                </DropdownMenuLabel>
                                <DropdownMenuGroup>
                                    <DropdownMenuItem className="flex items-center gap-3 hover:bg-zinc-200/80 dark:hover:bg-zinc-800/60 transition-all duration-200 cursor-pointer">
                                        <div className="min-w-10 h-10 bg-red-500 rounded-full flex justify-center items-center">
                                            <TriangleAlert className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="text-sm font-semibold">New login detected</div>
                                            <div className="text-xs text-zinc-500 dark:text-zinc-400">We detected a new login from another country.</div>
                                        </div>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="flex items-center gap-3 hover:bg-zinc-200/80 dark:hover:bg-zinc-800/60 transition-all duration-200 cursor-pointer">
                                        <div className="min-w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center">
                                            <AtSign className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="text-sm font-semibold">Mentions feed</div>
                                            <div className="text-xs text-zinc-500 dark:text-zinc-400">Press to see all posts you've been mentioned in.</div>
                                        </div>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />

                                <DropdownMenuItem className="justify-center text-xs text-zinc-500 dark:text-zinc-400 py-2.5 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 hover:bg-zinc-200/80 dark:hover:bg-zinc-800/60 transition-all duration-200">
                                    Show All
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="bg-zinc-200/60 hover:bg-zinc-200 dark:bg-zinc-800/60 dark:hover:bg-zinc-800 p-1.5 w-8 h-8 rounded-lg border transition-all duration-200 cursor-pointer flex justify-center items-center">
                                    <User className="w-4 h-4 text-zinc-400" />
                                </div>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="w-64 rounded-xl" align="end">
                                <DropdownMenuLabel className="w-full flex p-2 gap-2 items-center border-b">
                                    <div className="w-10 h-10 bg-zinc-200/60 dark:bg-zinc-800/60 border flex justify-center items-center rounded-xl">
                                        <User className="w-5 h-5 text-zinc-400" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="">Papp David</div>
                                        <div className="text-xs font-normal text-zinc-500 dark:text-zinc-400">+36 *** **78</div>
                                    </div>
                                </DropdownMenuLabel>

                                <DropdownMenuGroup>
                                    <DropdownMenuItem className="flex justify-between items-center gap-2 hover:bg-blue-500/10 transition-all duration-200 cursor-pointer px-3">
                                        <div className="flex gap-2 items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" className="fill-blue-500 dark:fill-blue-400">
                                                <path d="M9.081 3.925C10.896 2.715 13.345 2 16 2s5.104.716 6.919 1.925C24.726 5.13 26 6.905 26 9s-1.274 3.87-3.081 5.075C21.104 15.285 18.655 16 16 16s-5.104-.716-6.919-1.925C7.274 12.87 6 11.095 6 9s1.274-3.87 3.081-5.075m16.436 9.898a9.8 9.8 0 0 1-1.766 1.5C21.658 16.718 18.91 17.5 16 17.5s-5.658-.782-7.75-2.177a9.8 9.8 0 0 1-1.766-1.5A5.2 5.2 0 0 0 6 16c0 2.095 1.274 3.87 3.081 5.075C10.896 22.285 13.345 23 16 23s5.104-.716 6.919-1.925C24.726 19.87 26 18.095 26 16c0-.774-.174-1.503-.483-2.177m0 7a9.8 9.8 0 0 1-1.766 1.5C21.658 23.718 18.91 24.5 16 24.5s-5.658-.782-7.75-2.177a9.8 9.8 0 0 1-1.766-1.5A5.2 5.2 0 0 0 6 23c0 2.095 1.274 3.87 3.081 5.075C10.896 29.285 13.345 30 16 30s5.104-.716 6.919-1.925C24.726 26.87 26 25.095 26 23a5.2 5.2 0 0 0-.483-2.177" />
                                            </svg>
                                            <div className="">Points</div>
                                        </div>
                                        <div className="text-sm text-zinc-500 dark:text-zinc-400">
                                            <span>0</span>
                                        </div>
                                    </DropdownMenuItem>

                                    <DropdownMenuItem className="flex items-center gap-2 hover:bg-blue-500/10 transition-all duration-200 cursor-pointer px-3">
                                        <Settings className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                                        <div className="">Settings</div>
                                    </DropdownMenuItem>

                                    <DropdownMenuSub>
                                        <DropdownMenuSubTrigger className="flex items-center gap-2 hover:bg-blue-500/10 transition-all duration-200 cursor-pointer px-3">
                                            <Palette className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                                            <div className="">
                                                Mode: <span className="text-blue-500 dark:text-blue-400 capitalize">
                                                    {current === "system" ? "System" : current}
                                                </span>
                                            </div>
                                        </DropdownMenuSubTrigger>
                                        <DropdownMenuSubContent className="w-full py-1">
                                            <Option value="light" label="Light" />
                                            <Option value="dark" label="Dark" />
                                            <Option value="system" label="System" />
                                        </DropdownMenuSubContent>
                                    </DropdownMenuSub>

                                    <DropdownMenuItem className="flex items-center gap-2 hover:bg-blue-500/10 transition-all duration-200 cursor-pointer px-3">
                                        <CircleQuestionMark className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                                        <div className="">Help</div>
                                    </DropdownMenuItem>

                                    <DropdownMenuItem className="flex items-center gap-2 hover:bg-blue-500/10 transition-all duration-200 cursor-pointer px-3">
                                        <LogOut className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                                        <div className="">Sign out</div>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>

                                <DropdownMenuSeparator />

                                <DropdownMenuItem className="justify-center text-xs text-zinc-500 py-2.5 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 hover:bg-zinc-200/80 dark:hover:bg-zinc-800/60 transition-all duration-200">
                                    Add an existing account
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar