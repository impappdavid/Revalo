import MusicPlayer from "./navbar/music"
import SearchField from "./navbar/search"
import Notifications from "./navbar/notification"
import UserDropdown from "./navbar/user"

function Navbar() {


    return (
        <>
            <div className="w-full flex justify-center dark:bg-zinc-900 bg-white shadow-xs sticky top-0 z-50">
                <div className="w-full max-w-6xl flex items-center gap-4">
                    <div className="w-full max-w-40 p-1.5 pl-3">
                        <img src="/logo.png" alt="" className="w-8 h-8 rounded-lg hover:cursor-pointer hover:scale-95 transition-all duration-200" />
                    </div>
                    <div className="w-full flex justify-between gap-4 items-center p-1.5">
                        <SearchField />
                        <MusicPlayer />
                    </div>
                    <div className="w-full max-w-76 flex justify-end items-center gap-2 pr-2">

                        <Notifications />
                        <UserDropdown />

                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar