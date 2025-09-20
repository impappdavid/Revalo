import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AtSign, Bell, Settings, TriangleAlert } from "lucide-react";

function Notifications() {
    return (
        <>
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
        </>
    )
}
export default Notifications;