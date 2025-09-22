import { CircleQuestionMark, CircleUser, GalleryVerticalEnd, Gamepad2, MessageCircle, Phone, Users } from "lucide-react"
import { Link } from "react-router-dom"

function Sidebar() {
    return (
        <>
            <div className="w-full max-w-40 hidden sm:flex flex-col gap-0.5 fixed top-16 ">
                <Link to={"/profile"} className="w-full py-1.5 px-1.5 hover:bg-zinc-200/80 dark:hover:bg-zinc-900 rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer">
                    <CircleUser className="text-blue-500 dark:text-blue-400 w-4.5 h-4.5" />
                    <div className="text-sm">Profile</div>
                </Link>
                <Link to={"/feed"} className="w-full py-1.5 px-1.5 hover:bg-zinc-200/80 dark:hover:bg-zinc-900 rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256" className="fill-blue-500 dark:fill-blue-400">
                        <path d="M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 160H44V60h168ZM60 92a16 16 0 1 1 16 16a16 16 0 0 1-16-16m48 0a16 16 0 1 1 16 16a16 16 0 0 1-16-16" />
                    </svg>
                    <div className="text-sm">News</div>
                </Link>
                <Link to={"/chat"} className="w-full py-1.5 px-1.5 hover:bg-zinc-200/80 dark:hover:bg-zinc-900 rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer">
                    <MessageCircle className="text-blue-500 dark:text-blue-400 w-4.5 h-4.5" />
                    <div className="text-sm">Messenger</div>
                </Link>
                
                <Link to={"friends"} className="w-full py-1.5 px-1.5 hover:bg-zinc-200/80 dark:hover:bg-zinc-900 rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer">
                    <Users className="text-blue-500 dark:text-blue-400 w-4.5 h-4.5" />
                    <div className="text-sm">Friends</div>
                </Link>
                <Link to={"/communities"} className="w-full py-1.5 px-1.5 hover:bg-zinc-200/80 dark:hover:bg-zinc-900 rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-blue-500 dark:fill-blue-400">
                        <g fill-rule="evenodd" className="fill-blue-500">
                            <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                            <path className="fill-blue-500 dark:fill-blue-400" d="M12 12c1.873 0 3.57.62 4.815 1.487c1.183.825 2.185 2.051 2.185 3.37c0 .724-.309 1.324-.796 1.77c-.458.421-1.056.694-1.672.88C15.301 19.88 13.68 20 12 20s-3.301-.12-4.532-.493c-.616-.186-1.214-.459-1.673-.88C5.31 18.182 5 17.582 5 16.858c0-1.319 1.002-2.545 2.185-3.37C8.43 12.62 10.127 12 12 12m0 2c-1.44 0-2.743.48-3.67 1.127c-.989.69-1.33 1.392-1.33 1.73c0 .304.352.494.672.614l.205.07l.17.052c.94.284 2.32.407 3.953.407c1.508 0 2.799-.105 3.728-.344l.304-.087l.19-.06c.343-.117.778-.314.778-.652s-.341-1.04-1.33-1.73C14.744 14.481 13.44 14 12 14m7-1c1.044 0 1.992.345 2.693.833c.64.447 1.307 1.19 1.307 2.096c0 1.335-1.297 1.813-2.463 1.98l-.3.037l-.289.025l-.138.008c.122-.345.19-.72.19-1.122a3.8 3.8 0 0 0-.107-.888c.386-.03.703-.08.939-.151c.104-.032.01-.13-.1-.215l-.107-.078l-.076-.051a2.7 2.7 0 0 0-.995-.418c-.38-.76-.964-1.418-1.586-1.943A4.8 4.8 0 0 1 19 13M5 13q.537.002 1.032.113c-.622.525-1.206 1.183-1.586 1.943a2.7 2.7 0 0 0-.995.418l-.128.088c-.127.092-.276.22-.155.256c.236.071.553.122.94.151a3.7 3.7 0 0 0-.108.888c0 .402.068.777.19 1.122l-.28-.02l-.296-.03c-1.202-.147-2.614-.607-2.614-2c0-.905.666-1.649 1.307-2.096A4.76 4.76 0 0 1 5 13m13.5-6a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-13 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5M12 3a4 4 0 1 1 0 8a4 4 0 0 1 0-8m6.5 6a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m-13 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M12 5a2 2 0 1 0 0 4a2 2 0 0 0 0-4" />
                        </g>
                    </svg>
                    <div className="text-sm">Communities</div>
                </Link>
                <Link to={"/photos"} className="w-full py-1.5 px-1.5 hover:bg-zinc-200/80 dark:hover:bg-zinc-900 rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                        <g fill="none">
                            <path className="stroke-blue-500 dark:stroke-blue-400" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.33 17.657c.11-.366.17-.755.17-1.157v-9a4 4 0 0 0-4-4h-9a4 4 0 0 0-4 4v9.07m16.83 1.087l-.088-.104l-2.466-2.976a2 2 0 0 0-3.073-.008l-1.312 1.566l-.214.261m7.153 1.26a4 4 0 0 1-3.713 2.842m0 0l-.117.002h-9a4 4 0 0 1-4-3.93m13.117 3.928l-.093-.106l-3.347-3.996m-9.676.175l.177-.201l3.206-3.827a2 2 0 0 1 3.066 0l3.227 3.853" />
                            <circle cx="15.091" cy="8.909" r="1.5" className="fill-blue-500 dark:fill-blue-400" />
                        </g>
                    </svg>
                    <div className="text-sm">Photos</div>
                </Link>
                <Link to={"/music"} className="w-full py-1.5 px-1.5 hover:bg-zinc-200/80 dark:hover:bg-zinc-900 rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14" className="stroke-blue-500 dark:stroke-blue-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M1 5.616v2.768M4 3.31v7.381m3-9.689v11.996m3-9.688v7.381m3-5.075v2.768" stroke-width="1" />
                    </svg>
                    <div className="text-sm">Music</div>
                </Link>
                <Link to={"/videos"} className="w-full py-1.5 px-1.5 hover:bg-zinc-200/80 dark:hover:bg-zinc-900 rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" className="fill-blue-500 dark:fill-blue-400">
                        <path d="M7 11.252V6.756a.75.75 0 0 1 1.171-.62l3.61 2.45a.5.5 0 0 1 .001.828l-3.61 2.458A.75.75 0 0 1 7 11.252M2 5.5A2.5 2.5 0 0 1 4.5 3h9A2.5 2.5 0 0 1 16 5.5v7a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5zM4.5 4A1.5 1.5 0 0 0 3 5.5v7A1.5 1.5 0 0 0 4.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 4zm0 12c.456.607 1.182 1 2 1H14a4 4 0 0 0 4-4V7.5c0-.818-.393-1.544-1-2V13a3 3 0 0 1-3 3z" />
                    </svg>
                    <div className="text-sm">Videos</div>
                </Link>
                <Link to={"/clips"} className="w-full py-1 px-1.5 hover:bg-zinc-200/80 dark:hover:bg-zinc-900 rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer">
                    <GalleryVerticalEnd className="text-blue-500 dark:text-blue-400 w-4.5 h-4.5" />
                    <div className="text-sm">Clips</div>
                </Link>
                <Link to={"/games"} className="w-full py-1.5 px-1.5 hover:bg-zinc-200/80 dark:hover:bg-zinc-900 rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer">
                    <Gamepad2 className="text-blue-500 dark:text-blue-400 w-4.5 h-4.5" />
                    <div className="text-sm">Games</div>
                </Link>
                <Link to={"/stickers"} className="w-full py-1.5 px-1.5 hover:bg-zinc-200/80 dark:hover:bg-zinc-900 rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 28 28" className="fill-blue-500 dark:fill-blue-400">
                        <path d="M9.566 16.51q-.003-.005 0 0M10 8a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m8 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m3-5a4 4 0 0 1 4 4v7.343c0 1.26-.5 2.468-1.392 3.36l-5.906 5.905A4.75 4.75 0 0 1 14.342 25H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM7 4.5A2.5 2.5 0 0 0 4.5 7v14A2.5 2.5 0 0 0 7 23.5h7.343q.334-.001.657-.068v-3.985a10 10 0 0 1-1 .053c-1.88 0-3.252-.472-4.168-.965a6 6 0 0 1-1.025-.687a2.8 2.8 0 0 1-.423-.42a.75.75 0 0 1 1.182-.918c.013.006.025.025.036.035q.05.052.17.154c.16.135.414.324.771.516c.71.382 1.838.785 3.457.785c.353 0 1.018-.04 1.018-.04c0-1.93 1.903-3.46 3.732-3.46h4.746q.004-.078.004-.157V7A2.5 2.5 0 0 0 21 4.5zM18.75 16a2.25 2.25 0 0 0-2.25 2.25v4.43q.072-.064.142-.132l5.906-5.906q.291-.293.498-.642z" />
                    </svg>
                    <div className="text-sm">Stickers</div>
                </Link>
                <Link to={"/market"} className="w-full py-1.5 px-1.5 hover:bg-zinc-200/80 dark:hover:bg-zinc-900 rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-blue-500 dark:fill-blue-400">
                        <path d="M16 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-6 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" />
                        <path fill-rule="evenodd" d="M12 2.75A2.25 2.25 0 0 0 9.75 5v.254q.626-.005 1.355-.004h1.79q.73-.001 1.355.004V5A2.25 2.25 0 0 0 12 2.75m3.75 2.557V5a3.75 3.75 0 0 0-7.5 0v.307q-.202.014-.391.035c-.878.095-1.613.293-2.265.74a5 5 0 0 0-.63.516c-.566.552-.905 1.234-1.17 2.076c-.257.819-.465 1.859-.727 3.166l-.019.095c-.376 1.883-.673 3.367-.758 4.549c-.088 1.208.034 2.223.606 3.104q.288.442.664.81c.752.734 1.724 1.052 2.925 1.204c1.176.148 2.69.148 4.61.148h1.81c1.921 0 3.434 0 4.61-.148c1.201-.152 2.174-.47 2.925-1.204a4.8 4.8 0 0 0 .664-.81c.572-.88.694-1.896.607-3.104c-.086-1.182-.382-2.666-.76-4.549l-.018-.095c-.261-1.307-.47-2.347-.727-3.166c-.265-.842-.604-1.524-1.17-2.076a5 5 0 0 0-.63-.516c-.652-.447-1.387-.645-2.265-.74a11 11 0 0 0-.39-.035M8.02 6.833c-.747.08-1.208.233-1.578.486a3.3 3.3 0 0 0-.431.354c-.321.313-.56.735-.786 1.451c-.23.733-.424 1.693-.695 3.052c-.39 1.948-.667 3.34-.744 4.416c-.077 1.062.052 1.693.368 2.179q.196.302.454.554c.415.405 1.008.655 2.065.789c1.07.135 2.49.136 4.476.136h1.703c1.986 0 3.404-.001 4.475-.136c1.057-.134 1.65-.384 2.065-.789a3.3 3.3 0 0 0 .454-.554c.316-.486.445-1.117.369-2.18c-.078-1.076-.355-2.467-.744-4.415c-.272-1.359-.465-2.32-.696-3.052c-.225-.716-.465-1.138-.786-1.451a3 3 0 0 0-.43-.354c-.37-.253-.832-.405-1.579-.486c-.763-.082-1.743-.083-3.129-.083H11.15c-1.386 0-2.366.001-3.13.083" clip-rule="evenodd" />
                    </svg>
                    <div className="text-sm">Market</div>
                </Link>
                <Link to={"/jobs"} className="w-full py-1.5 px-1.5 hover:bg-zinc-200/80 dark:hover:bg-zinc-900 rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                        <g fill="none" className="stroke-blue-500 dark:stroke-blue-400" stroke-width="1.5">
                            <path stroke-linecap="round" d="M11.007 21H9.605c-3.585 0-5.377 0-6.491-1.135S2 16.904 2 13.25c0-3.653 0-5.48 1.114-6.615S6.02 5.5 9.605 5.5h3.803c3.585 0 5.378 0 6.492 1.135c.857.873 1.054 2.156 1.1 4.365" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.017 20.023L22 22m-.947-4.474a3.527 3.527 0 1 0-7.053 0a3.527 3.527 0 0 0 7.053 0" />
                            <path d="m16 5.5l-.1-.31c-.495-1.54-.742-2.31-1.331-2.75C13.979 2 13.197 2 11.63 2h-.263c-1.565 0-2.348 0-2.937.44c-.59.44-.837 1.21-1.332 2.75L7 5.5" />
                        </g>
                    </svg>
                    <div className="text-sm">Jobs</div>
                </Link>
                <div className="px-1.5 py-2">
                    <div className="h-0.5  w-full bg-zinc-200 dark:bg-zinc-900"></div>
                </div>
                <Link to={"/bookmarks"} className="w-full py-1.5 px-1.5 hover:bg-zinc-200/80 dark:hover:bg-zinc-900 rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="stroke-blue-500 dark:stroke-blue-400">
                        <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 17.98V9.709c0-3.634 0-5.45 1.172-6.58S8.229 2 12 2s5.657 0 6.828 1.129C20 4.257 20 6.074 20 9.708v8.273c0 2.306 0 3.459-.773 3.871c-1.497.8-4.304-1.867-5.637-2.67c-.773-.465-1.16-.698-1.59-.698s-.817.233-1.59.698c-1.333.803-4.14 3.47-5.637 2.67C4 21.44 4 20.287 4 17.981" />
                    </svg>
                    <div className="text-sm">Bookmarks</div>
                </Link>
                <Link to={""} className="w-full py-1.5 px-1.5 hover:bg-zinc-200/80 dark:hover:bg-zinc-900 rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer">
                    <CircleQuestionMark className="text-blue-500 dark:text-blue-400 w-4.5 h-4.5"/>
                    <div className="text-sm">Help</div>
                </Link>
                <div className="text-xs text-zinc-400 px-2 pt-2">Revalo 2025</div>
            </div>
        </>
    )
}
export default Sidebar