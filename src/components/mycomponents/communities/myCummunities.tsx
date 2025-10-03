function MyCommunities(){
    return(
        <>
             <div className="w-50 lg:w-76 flex flex-col gap-4 ">
                <div className="bg-white dark:bg-zinc-900 rounded-xl p-2 border flex flex-col gap-1">
                    <div className="font-medium px-2">Your Communities</div>
                    <div className="p-2 flex items-center gap-2 hover:bg-zinc-200/80 dark:hover:bg-zinc-800/80 cursor-pointer rounded-lg transition-all duration-200">
                        <img src="/logo.png" alt="logo" className="w-10 h-10 rounded-full"/>  
                        <div className="flex flex-col">
                            <div className="font-medium">Revalo</div>
                            <div className="text-xs text-zinc-400">84.5k member</div>
                        </div>  
                    </div>    
                </div>
            </div>
        </>
    ) 
}
export default MyCommunities