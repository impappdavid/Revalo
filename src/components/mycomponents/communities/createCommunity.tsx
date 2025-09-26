import MyCommunities from "./myCummunities"

function CreateCommunity() {
    return (
        <>
            <div className="w-50 lg:w-76 fixed top-14 flex flex-col gap-4 ">
                <div className="bg-white dark:bg-zinc-900 rounded-xl p-2 border flex flex-col gap-1">
                    <div className="bg-blue-500 font-medium text-sm flex justify-center py-2 rounded-lg cursor-pointer hover:bg-blue-500/80 transition-all duration-200">Create Community</div>    
                </div>
                <MyCommunities />
            </div>
        </>
    )
}
export default CreateCommunity