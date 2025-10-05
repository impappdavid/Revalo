import Sidebar from "../sidebar"
import ClipInfos from "./clipInfos"
import ClipScroller from "./clipsScroller"

function ClipsLayout() {
    return (
        <>
            <div className="w-full flex justify-center dark:bg-zinc-950 bg-zinc-100 h-full">
                <div className="w-full max-w-6xl flex p-2 gap-4">
                    <Sidebar />
                    <div className="w-full hidden sm:flex max-w-40"></div>
                    <div className="flex flex-col gap-4 w-full">
                        <ClipScroller />
                    </div>
                    <div className="w-full lg:max-w-76 hidden lg:flex  items-center gap-2 pl-2 flex-col">
                        <ClipInfos />
                        
                    </div>
                </div>


            </div>
        </>
    )
}
export default ClipsLayout