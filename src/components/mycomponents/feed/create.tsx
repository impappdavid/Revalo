import { Plus } from "lucide-react"

function Create() {
    return (
        <>
            <div className="w-full flex p-2 gap-2 w-full border bg-zinc-200/80 hover:bg-zinc-200 dark:bg-zinc-900/80 dark:hover:bg-zinc-900 rounded-xl cursor-pointer transition-all duration-200 text-white justify-center items-center">
                <div className="flex gap-1 w-full justify-center items-center text-black dark:text-white font-medium">
                    <Plus className="w-5 h-5"/>
                    Create Post
                </div>

            </div>
        </>
    )
}
export default Create