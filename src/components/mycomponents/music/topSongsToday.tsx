import { Link } from "react-router-dom"

function TopSongsToday() {
    const songsData = [
        {
            id: 1,
            coverSource: "/images/music.jpg",
            name: "WoW.",
            artist: "Post Malone",
            collection: "The Diamond Collection",
            time: "3:12",
        },
        {
            id: 2,
            coverSource: "/images/music1.jpg",
            name: "Insane",
            artist: "Post Malone",
            collection: "The Diamond Collection",
            time: "1:59",
        },
        {
            id: 3,
            coverSource: "/images/music2.jpg",
            name: "Cannonball",
            artist: "Lithe, Don Toliver",
            collection: "Connonball (feat. Don Toliver)",
            time: "2:09",
        },
        {
            id: 4,
            coverSource: "/images/music3.jpg",
            name: "Sorry",
            artist: "The Kid Laroi",
            collection: "Sorry",
            time: "2:25",
        },
        {
            id: 5,
            coverSource: "/images/music4.jpg",
            name: "Stay",
            artist: "The Kid Laroi, Justin Bieber",
            collection: "Stay",
            time: "3:25",
        },
    ]
    return (
        <>
            <div className="p-4 bg-white dark:bg-zinc-900 border rounded-2xl flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <div className="font-medium">Top Songs Today</div>
                    <Link to={"/"} className="text-sm text-blue-500 dark:text-blue-400 hover:underline">View Top 100</Link>
                </div>
                <div className="flex flex-col">
                    {songsData.map((song, index) => (
                        <div key={index} className="p-2 px-4 hover:bg-zinc-200/80 dark:hover:bg-zinc-800 rounded-md cursor-pointer transition-all duration-200 grid grid-cols-6">
                            <div className="flex gap-4 col-span-3 ">
                                <div className="flex items-center">{song.id}</div>
                                <div className="flex gap-2  items-center ">

                                    <img src={song.coverSource} alt="music2.jpg" className="w-10 h-10 rounded-md" />
                                    <div className="flex flex-col">
                                        <div className="font-medium">{song.name}</div>
                                        <div className="text-xs text-zinc-600 dark:text-zinc-400">{song.artist}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-sm col-span-2 flex items-center text-zinc-600 dark:text-zinc-400">{song.collection}</div>
                            <div className="flex justify-end text-sm items-center text-zinc-600 dark:text-zinc-400">{song.time}</div>
                        </div>
                    ))}



                </div>
            </div>
        </>
    )
}
export default TopSongsToday