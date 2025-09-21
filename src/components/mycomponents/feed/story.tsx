import { Compass, Plus } from "lucide-react"

function Story() {
    return (
        <>
            <div className="flex w-full p-1.5 gap-2">
                <div className="h-34 bg-zinc-200 w-24 rounded-xl relative hover:scale-102 transition-all duration-200 cursor-pointer">
                    <img src="/images/profile3.jpg" alt="" className="w-full h-full object-cover rounded-xl" />
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer">
                        <div className="bg-black/60 backdrop-blur-2xl p-2 rounded-full">
                            <Plus className="text-white"/>
                        </div>
                        <div className="text-black text-sm">Story</div>
                    </div>
                </div>
                <div className="h-34 w-24 rounded-xl relative hover:scale-102 transition-all duration-200 cursor-pointer">
                    <img src="/images/profile.jpg" alt="" className="w-full h-full object-cover rounded-xl" />
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer">
                        <div className="bg-black/60 backdrop-blur-2xl p-2 rounded-full">
                            <Compass className="text-white"/>
                        </div>
                        <div className="text-white text-sm">Explore</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Story