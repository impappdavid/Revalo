import Sidebar from "../sidebar"
import CommunityList from "./comunityList"
import CreateCommunity from "./createCommunity"

function CommunitiesLayout() {
    return (
        <>
            <div className="w-full flex justify-center dark:bg-zinc-950 bg-zinc-100 min-h-screen">
                <div className="w-full max-w-6xl flex p-2 gap-4">
                    <Sidebar />
                    <div className="w-full hidden sm:flex max-w-40"></div>
                    <div className="flex flex-col w-full">
                        <CommunityList />
                    </div>
                    <div className="w-full lg:max-w-76 hidden lg:flex justify-end items-center gap-2 pl-2 flex-col">
                        <CreateCommunity />
                        
                    </div>
                </div>


            </div>
        </>
    )
}
export default CommunitiesLayout