import Sidebar from "../sidebar"
import FixedPlayer from "./fixedPlayer"
import MyMusics from "./myMusics"
import SearchMusic from "./search"
import TopSongsToday from "./topSongsToday"

function MusicLayout() {
    return (
        <>
            <div className="w-full flex justify-center dark:bg-zinc-950 bg-zinc-100 min-h-screen">
                <div className="w-full max-w-6xl flex p-2 gap-4">
                    <Sidebar />
                    <div className="w-full hidden sm:flex max-w-40"></div>
                    <div className="flex flex-col w-full relative gap-4">
                        <SearchMusic />
                        <MyMusics />
                        <TopSongsToday />
                        <FixedPlayer />
                    </div>
                    
                </div>


            </div>
        </>
    )
}
export default MusicLayout