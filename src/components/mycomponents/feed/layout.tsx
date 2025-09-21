import Sidebar from "../sidebar"
import Create from "./create"
import Others from "./others"
import Posts from "./posts"
import Story from "./story"

function FeedLayout() {
    return (
        <>
            <div className="w-full flex justify-center dark:bg-zinc-950 bg-zinc-100 min-h-screen">
                <div className="w-full max-w-6xl flex p-2 gap-4">
                    <Sidebar />
                    <div className="w-full hidden sm:flex max-w-40"></div>
                    <div className="flex flex-col gap-4 w-full">
                        <Story />
                        <Create />
                        <Posts />
                    </div>
                    <div className="w-full max-w-76 hidden sm:flex justify-end items-center gap-2 pl-2">
                        <Others />
                    </div>
                </div>


            </div>
        </>
    )
}
export default FeedLayout