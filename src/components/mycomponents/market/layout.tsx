import Sidebar from "../sidebar"
import BiggestDiscount from "./biggestDiscount"
import MayBeInteresting from "./mayBeInteresting"
import Menu from "./menu"
import TopSellers from "./topSellers"

function MarketLayout() {
    return (
        <>
            <div className="w-full flex justify-center dark:bg-zinc-950 bg-zinc-100 min-h-screen">
                <div className="w-full max-w-6xl flex p-2 gap-4">
                    <Sidebar />
                    <div className="w-full hidden sm:flex max-w-40"></div>
                    <div className="flex flex-col w-full relative gap-4">
                        <Menu />
                        <MayBeInteresting />
                        <TopSellers />
                        <BiggestDiscount />
                    </div>

                </div>


            </div>
        </>
    )
}
export default MarketLayout