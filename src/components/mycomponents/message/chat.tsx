import { Input } from "@/components/ui/input"
import { BadgePlus, Ellipsis, Mic, Search, Smile, X } from "lucide-react"

function Chat() {
    return (
        <>
            <div className="w-full bg-zinc-900 border rounded-2xl p-4 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <div className="p-2 rounded-md hover:bg-zinc-800 cursor-pointer">
                            <X className="h-5 w-5 text-zinc-400" />
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src="/logo.png" alt="logo" className="w-8 h-8 rounded-full" />
                            <div className="flex flex-col">
                                <div className="text-white font-medium text-sm">Revalo</div>
                                <div className="text-xs text-zinc-400">Service notifications</div>
                            </div>

                        </div>
                    </div>
                    <div className="flex gap-1 items-center">
                        <div className="p-2 rounded-md hover:bg-zinc-800 cursor-pointer">
                            <Search className="h-5 w-5 text-zinc-400" />
                        </div>
                        <div className="p-2 rounded-md hover:bg-zinc-800 cursor-pointer">
                            <Ellipsis className="h-5 w-5 text-zinc-400" />
                        </div>
                    </div>
                </div>
                <div className="h-[750px] ">
                    <div className="p-2 hover:bg-zinc-800/80 rounded-xl flex gap-2">
                        <img src="/logo.png" alt="" className="w-8 h-8 rounded-full" />
                        <div className="flex flex-col">
                            <div className="font-medium text-blue-400">Revalo</div>
                            <div className="text-sm text-zinc-200">
                                Bejelentkezett a fiókjába: Papp David
                                <br />
                                <div className="h-4"></div>
                                Bejelentkezés dátuma: 2025 szeptember 19., 0:30-kor
                                <br />
                                Készülék: Chrome böngészővel
                                <br />
                                Szolgáltatás: "Revalo" honlap
                                <br />
                                Geopozíció: Budapest. Ha nem Ön, kérjük, azonnal változtassa meg jelszavát.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-3 flex bg-zinc-800/80 rounded-xl items-center ">
                    <div className="p-1.5 px-0 rounded-md text-zinc-400 hover:text-white cursor-pointer">
                        <BadgePlus className="w-5 h-5 " />
                    </div>
                    <Input
                        type="text"
                        placeholder="Message Revalo"
                        className="w-full h-10 border-none bg-transparent rounded-lg transition-all duration-200 text-sm"
                    />
                    <div className="flex gap-2">
                        <div className="p-1.5 px-0 rounded-md text-zinc-400 hover:text-white cursor-pointer">
                            <Smile className="w-5 h-5 " />
                        </div>
                        <div className="p-1.5 px-0 rounded-md text-zinc-400 hover:text-white cursor-pointer">
                            <Mic className="w-5 h-5 " />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Chat