import Sidebar from "../sidebar"
import Header from "./header"

function PhotosLayout() {
    return (
        <>
            <div className="w-full flex justify-center dark:bg-zinc-950 bg-zinc-100 min-h-screen">
                <div className="w-full max-w-6xl flex p-2 gap-4">
                    <Sidebar />
                    <div className="w-full hidden sm:flex max-w-40"></div>
                    <div className="flex flex-col w-full">
                        <Header />
                    </div>
                    
                </div>


            </div>
        </>
    )
}
export default PhotosLayout