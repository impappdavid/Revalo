function MessageFilter() {
    return (
        <>
            <div className="w-50 lg:w-76 fixed top-16 flex flex-col gap-4 ">
                <div className="bg-white dark:bg-zinc-900 rounded-xl p-2 border flex flex-col gap-1">
                    <div className="text-sm px-2 py-1.5 text-black dark:text-white bg-zinc-200/80 dark:bg-zinc-800 rounded-lg">All</div>
                    <div className="text-sm px-2 py-1.5 text-black dark:text-white hover:bg-zinc-200/80 dark:hover:bg-zinc-800 rounded-lg transition-all duration-200 cursor-pointer">Unread</div>
                    <div className="text-sm px-2 py-1.5 text-black dark:text-white hover:bg-zinc-200/80 dark:hover:bg-zinc-800 rounded-lg transition-all duration-200 cursor-pointer">Archive</div>
                </div>
            </div>
        </>
    )
}
export default MessageFilter;