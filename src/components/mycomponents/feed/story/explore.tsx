import { Compass, X } from "lucide-react"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

function ExploreStories() {
    return (
        <>
            <Dialog>
                <DialogTrigger>
                    <div className="h-34 w-24 rounded-xl relative hover:opacity-80 transition-all duration-200 cursor-pointer">
                        <img src="/images/profile.jpg" alt="" className="w-full h-full object-cover rounded-xl" />
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer">
                            <div className="bg-black/60 backdrop-blur-2xl p-2 rounded-full">
                                <Compass className="text-white" />
                            </div>
                            <div className="text-white text-sm">Explore</div>
                        </div>
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-xl max-w-lg">
                    <div className="relative flex flex-col gap-4">
                        <div className="flex justify-center w-full items-center py-4 pb-4 rounded-xl bg-zinc-800/80">
                            <div className="text-2xl font-medium">Explore Stories</div>
                        </div>
                        <div className="grid grid-cols-4 gap-1 h-[650px]">
                            <div className="relative overflow-hidden cursor-pointer hover:opacity-80 transition-all duration-200 h-fit">
                                <div className="absolute top-2 left-2 rounded-full border-2 border-blue-400 p-0.5">
                                    <img src="/images/profile2.jpg" alt="" className="w-8 h-8 rounded-full" />
                                </div>

                                <div className="absolute bottom-2 left-2">
                                    <div className="font-medium">Marko Polo</div>
                                </div>

                                <img src="/images/holiday.jpg" alt="" className="w-full h-50" />
                            </div>

                            <div className="relative overflow-hidden cursor-pointer hover:opacity-80 transition-all duration-200 h-fit">
                                <div className="absolute top-2 left-2 rounded-full border-2 border-blue-400 p-0.5">
                                    <img src="/images/profile.jpg" alt="" className="w-8 h-8 rounded-full" />
                                </div>

                                <div className="absolute bottom-2 left-2">
                                    <div className="font-medium">Christian Tom</div>
                                </div>

                                <img src="/images/food.jpg" alt="" className="w-full h-50" />
                            </div>

                            <div className="relative overflow-hidden cursor-pointer hover:opacity-80 transition-all duration-200 h-fit">
                                <div className="absolute top-2 left-2 rounded-full border-2 border-blue-400 p-0.5">
                                    <img src="/images/profile.jpg" alt="" className="w-8 h-8 rounded-full" />
                                </div>

                                <div className="absolute bottom-2 left-2">
                                    <div className="font-medium">Christian Tom</div>
                                </div>

                                <img src="/images/restaurant.jpg" alt="" className="w-full h-50" />
                            </div>

                            <div className="relative overflow-hidden cursor-pointer hover:opacity-80 transition-all duration-200 h-fit">
                                <div className="absolute top-2 left-2 rounded-full border-2 border-blue-400 p-0.5">
                                    <img src="/images/profile.jpg" alt="" className="w-8 h-8 rounded-full" />
                                </div>

                                <div className="absolute bottom-2 left-2">
                                    <div className="font-medium">Christian Tom</div>
                                </div>

                                <img src="/images/restaurant.jpg" alt="" className="w-full h-50" />
                            </div>

                        </div>
                        <DialogClose className="absolute -top-3 -right-14 bg-zinc-900 border text-zinc-400 hover:text-zinc-200 cursor-pointer p-2 hover:bg-zinc-800/50 backdrop-blur-2xl rounded-xl transition-all duration-200">
                            <X className="w-5 h-5  transition-all duration-200" />
                        </DialogClose>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}
export default ExploreStories