import { Input } from "@/components/ui/input"
import { Archive, Ellipsis, Menu, Search, SquarePen } from "lucide-react"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Link } from "react-router-dom"

function Chat() {
    return (
        <>
            <div className="w-full bg-zinc-900 border rounded-2xl p-4 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                        <div className="p-1.5 rounded-md hover:bg-zinc-800 cursor-pointer">
                            <Menu className="h-4.5 w-5 text-zinc-400" />
                        </div>
                        <div className="text-white font-medium">Chats</div>
                    </div>
                    <div className="flex gap-1 items-center">
                        <div className="p-1.5 rounded-md hover:bg-zinc-800 cursor-pointer">
                            <Archive className="h-4.5 w-4.5 text-zinc-400" />
                        </div>
                        <div className="p-1.5 rounded-md hover:bg-zinc-800 cursor-pointer">
                            <SquarePen className="h-4.5 w-4.5 text-zinc-400" />
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted-foreground" />
                    <Input
                        type="text"
                        placeholder="Search"
                        className="pl-10 w-full h-8 border-none rounded-lg bg-zinc-200/60 hover:bg-zinc-200 dark:bg-zinc-800/60 dark:hover:bg-zinc-800 transition-all duration-200"
                    />
                </div>
                <div className="h-full">
                    <Tabs defaultValue="all" className="max-h-[770px] h-[770px]">
                        <TabsList>
                            <TabsTrigger value="all">
                                All
                            </TabsTrigger>
                            <TabsTrigger value="channels">
                                Channels
                            </TabsTrigger>

                        </TabsList>
                        <TabsContent value="all" >
                            <div className="p-2 w-full group  hover:bg-zinc-800/80 rounded-lg cursor-pointer transition-all duration-200 ">
                                <div className="flex gap-2 items-center">
                                    <img src="/logo.png" alt="logo" className="w-10 h-10 rounded-full" />
                                    <div className="flex flex-col w-full">
                                        <div className="flex justify-between items-start">
                                            <div className="font-medium">Revalo</div>
                                            <Ellipsis className="w-4 h-4 text-zinc-400 opacity-0 group-hover:opacity-100 hover:text-white transition-all duration-200"/>
                                        </div>
                                        <div className="flex justify-between items-center w-full">
                                            <div className="text-xs text-zinc-400 truncate max-w-xs">Hello, Welcome to our social media platform! If you have any question write us a message</div>
                                            <div className="text-xs text-zinc-400">5d</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="channels">
                            <div className="p-12 flex flex-col jusitfy-center items-center gap-4">
                                <div className="text-sm text-zinc-400">You are not part of any channel</div>
                                <div className="bg-blue-500 hover:bg-blue-500/80 transition-all duration-200 cursor-pointer text-white rounded-lg h-8 px-4 flex justify-center items-center">
                                    Search channels
                                </div>
                            </div>
                        </TabsContent>

                    </Tabs>
                </div>
            </div>
        </>
    )
}
export default Chat