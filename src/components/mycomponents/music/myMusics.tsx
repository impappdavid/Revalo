import { Link } from "react-router-dom"

function MyMusics() {
    return (
        <>
            <div className="p-4 bg-white dark:bg-zinc-900 border rounded-2xl flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <div className="font-medium">Your Library</div>
                    <Link to={"/"} className="text-sm text-blue-500 dark:text-blue-400 hover:underline">View All</Link>
                </div>

                <div className="grid grid-cols-8 gap-2">
                    <div className="flex flex-col gap-0.5 cursor-pointer hover:opacity-80 transition-all duration-200">
                        <img src="/images/liked.png" alt="music.jpg" className="rounded-xl border aspect-square" />
                        <div className="px-1 w-full flex justify-between items-center">
                            <div className="font-medium">Liked songs</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-0.5 cursor-pointer hover:opacity-80 transition-all duration-200">
                        <img src="/images/music.jpg" alt="music.jpg" className="rounded-xl border aspect-square" />
                        <div className="px-1 w-full flex justify-between items-center">
                            <div className="font-medium">2025</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default MyMusics