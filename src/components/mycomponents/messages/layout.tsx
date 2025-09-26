import Sidebar from "../sidebar"
import Chat from "./chats"
import MessageFilter from "./filter"

function MessagesLayout() {
    return (
        <>
            <div className="w-full flex justify-center dark:bg-zinc-950 bg-zinc-100 h-full">
                <div className="w-full max-w-6xl flex p-2 gap-4">
                    <Sidebar />
                    <div className="w-full hidden sm:flex max-w-40"></div>
                    <div className="flex flex-col w-full">
                        <Chat />
                    </div>
                    <div className="w-full max-w-50 lg:max-w-76 hidden sm:flex justify-end items-center gap-2 pl-2">
                        <MessageFilter />
                    </div>
                </div>


            </div>
        </>
    )
}
export default MessagesLayout