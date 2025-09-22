import { Bell, ChartNoAxesColumn, EllipsisVertical, Heart, MessageSquare, Repeat2, TriangleAlert } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function ImageGrid({ images }: { images: string[] }) {
    if (!images || images.length === 0) return null

    const maxToShow = 6
    const extraCount = images.length - maxToShow
    const display = images.slice(0, maxToShow)

    // Layout:
    // - 1 image: full width
    // - 2 images: grid-cols-2 (matches your last card style)
    // - 3-6 images: grid-cols-2 with tight gaps to keep your style
    const gridCols =
        display.length === 1 ? "grid-cols-1" : display.length === 4 ? "grid-cols-2" : "grid-cols-3"

    return (
        <div className={`grid ${gridCols} gap-0.5`}>
            {display.map((src, idx) => {
                const isLast = idx === display.length - 1
                const shouldOverlay = extraCount > 0 && isLast
                return (
                    <div key={idx} className="relative">
                        <img
                            src={src.startsWith("/") ? src : `/${src}`}
                            alt=""
                            className={`object-cover cursor-pointer ${display.length === 1 ? "" : "aspect-square"} w-full h-full ${shouldOverlay ? "blur-[1px]" : ""}`}
                        />
                        {shouldOverlay && (
                            <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center cursor-pointer">
                                <span className="text-white text-xl font-medium">
                                    +{extraCount} more
                                </span>
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

function PostCard({
    profilePic,
    name,
    followers,
    content,
    likes,
    comments,
    time,
    images,
    liked,
}: {
    profilePic: string
    name: string
    followers: string
    content: string
    likes: number | string
    comments: number | string
    time: string
    images: string[]
    liked?: boolean
}) {
    return (
        <div className="flex flex-col  gap-2">
            <div className="flex gap-2 pt-3 px-3 pb-2 items-center justify-between">
                <div className="flex gap-2 items-center">
                    <img src={profilePic} alt="profile" className="w-10 h-10 rounded-full" />
                    <div className="flex flex-col">
                        <div className="text-sm font-medium">{name}</div>
                        <div className="flex gap-1 items-center">
                            <div className="text-xs text-zinc-600 dark:text-zinc-400">{followers}</div>
                            <div className="text-xs text-zinc-600 dark:text-zinc-400">•</div>
                            <div className="text-xs text-zinc-600 dark:text-zinc-400">{time}</div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="py-1 px-3 text-sm bg-blue-500 rounded-lg text-white cursor-pointer">
                        Follow
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="outline-none">
                            <div className="py-1.5 px-1.5 dark:hover:bg-zinc-800 hover:bg-zinc-300/80 rounded-md cursor-pointer transition-all duration-200">
                                <EllipsisVertical className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-44 rounded-xl p-1 flex flex-col gap-0.5" align="end">
                            <DropdownMenuItem className="px-2 py-1.5 rounded-md flex gap-2 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="stroke-blue-500 dark:stroke-blue-400">
                                    <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 17.98V9.709c0-3.634 0-5.45 1.172-6.58S8.229 2 12 2s5.657 0 6.828 1.129C20 4.257 20 6.074 20 9.708v8.273c0 2.306 0 3.459-.773 3.871c-1.497.8-4.304-1.867-5.637-2.67c-.773-.465-1.16-.698-1.59-.698s-.817.233-1.59.698c-1.333.803-4.14 3.47-5.637 2.67C4 21.44 4 20.287 4 17.981" />
                                </svg>
                                <div className="text-xs">Add to bookmarks</div>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="px-2 py-1.5 rounded-md flex gap-2 cursor-pointer">
                                <Bell className="w-4 h-4 stroke-blue-400 " />
                                <div className="text-xs">Enable notifications</div>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="px-2 py-1.5 rounded-md flex gap-2 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-blue-400">
                                    <path fill-rule="evenodd" d="M15 1.25h-4.056c-1.838 0-3.294 0-4.433.153c-1.172.158-2.121.49-2.87 1.238c-.748.749-1.08 1.698-1.238 2.87c-.153 1.14-.153 2.595-.153 4.433V16a3.75 3.75 0 0 0 3.166 3.705c.137.764.402 1.416.932 1.947c.602.602 1.36.86 2.26.982c.867.116 1.97.116 3.337.116h3.11c1.367 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982s.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337v-5.11c0-1.367 0-2.47-.116-3.337c-.122-.9-.38-1.658-.982-2.26c-.531-.53-1.183-.795-1.947-.932A3.75 3.75 0 0 0 15 1.25m2.13 3.021A2.25 2.25 0 0 0 15 2.75h-4c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S4.025 4.705 3.89 5.71c-.138 1.029-.14 2.383-.14 4.29v6a2.25 2.25 0 0 0 1.521 2.13c-.021-.61-.021-1.3-.021-2.075v-5.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117h3.11c.775 0 1.464 0 2.074.021M7.408 6.41c.277-.277.665-.457 1.4-.556c.754-.101 1.756-.103 3.191-.103h3c1.435 0 2.436.002 3.192.103c.734.099 1.122.28 1.399.556c.277.277.457.665.556 1.4c.101.754.103 1.756.103 3.191v5c0 1.435-.002 2.436-.103 3.192c-.099.734-.28 1.122-.556 1.399c-.277.277-.665.457-1.4.556c-.755.101-1.756.103-3.191.103h-3c-1.435 0-2.437-.002-3.192-.103c-.734-.099-1.122-.28-1.399-.556c-.277-.277-.457-.665-.556-1.4c-.101-.755-.103-1.756-.103-3.191v-5c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399" clip-rule="evenodd" />
                                </svg>
                                <div className="text-xs">Copy link</div>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="px-2 py-1.5 rounded-md flex gap-2 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                    <g fill="none" className="stroke-blue-400" stroke-width="1.5">
                                        <circle cx="12" cy="12" r="10" />
                                        <path stroke-linecap="round" d="M15 12H9" />
                                    </g>
                                </svg>
                                <div className="text-xs">Not interesting</div>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="px-2 py-1.5 rounded-md flex gap-2 cursor-pointer">
                                <TriangleAlert className="w-4 h-4 text-red-500" />
                                <div className="text-xs">Report</div>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {content ? <div className="px-4 -mt-2 pb-2">{content}</div> : null}

            {/* Images */}
            <div className="px-0">
                <ImageGrid images={images} />
            </div>

            <div className="flex justify-between items-center px-4 pt-2 pb-4 gap-24">
                <div className="flex justify-between gap-4 w-full px-2">
                    <div className="flex gap-1 text-zinc-600 dark:text-zinc-400 group rounded-lg cursor-pointer transition-all duration-200 items-center">
                        <Heart
                            className={`w-4 h-4 group-hover:text-red-500   ${liked ? "text-red-500 fill-red-500 dark:text-red-500" : ""} transition-all duration-200`}
                        />
                        <div className="text-xs text-zinc-600 dark:text-zinc-400">{likes}</div>
                    </div>
                    <div className="flex gap-1 group rounded-lg text-zinc-600 dark:text-zinc-400 cursor-pointer transition-all duration-200 items-center">
                        <MessageSquare className="w-4 h-4  group-hover:text-sky-500 transition-all duration-200" />
                        <div className="text-xs">{comments}</div>
                    </div>
                    <div className="flex gap-1 group rounded-lg text-zinc-600 dark:text-zinc-400 cursor-pointer transition-all duration-200 items-center">
                        <Repeat2 className="w-4.5 h-4.5  group-hover:text-emerald-500 transition-all duration-200" />
                        <div className="text-xs">{comments}</div>
                    </div>
                    <div className="flex gap-1 group rounded-lg text-zinc-600 dark:text-zinc-400 cursor-pointer transition-all duration-200 items-center">
                        <ChartNoAxesColumn className="w-4 h-4  group-hover:text-white transition-all duration-200" />
                        <div className="text-xs">{comments}</div>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="group stroke-zinc-500 dark:stroke-zinc-400 fill-none cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className=" group-hover:stroke-blue-400 transition-all duration-200">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 17.98V9.709c0-3.634 0-5.45 1.172-6.58S8.229 2 12 2s5.657 0 6.828 1.129C20 4.257 20 6.074 20 9.708v8.273c0 2.306 0 3.459-.773 3.871c-1.497.8-4.304-1.867-5.637-2.67c-.773-.465-1.16-.698-1.59-.698s-.817.233-1.59.698c-1.333.803-4.14 3.47-5.637 2.67C4 21.44 4 20.287 4 17.981" />
                        </svg>
                    </div>
                    <div className="group stroke-zinc-500 dark:stroke-zinc-400 fill-none cursor-pointer" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className=" group-hover:stroke-blue-400 transition-all duration-200">
                            <path  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2v13m4-9l-4-4l-4 4m-4 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                        </svg>
                    </div>

                </div>

            </div>
        </div>
    )
}

function Posts() {
    const posts = [
        {
            id: 1,
            profilePic: "/images/profile2.jpg",
            name: "Adam Chile",
            followers: "160k followers",
            content: "",
            likes: "10k",
            comments: "1.2k",
            time: "2d ago",
            images: [
                "images/restaurant.jpg",
                "images/food.jpg",
                "images/profile.jpg",
                "images/holiday.jpg",
                "images/night.jpg",
                "images/photo.jpg",
                "images/restaurant.jpg",
                "images/food.jpg",
            ],
        },
        {
            id: 2,
            profilePic: "/images/profile.jpg",
            name: "Gillbert Hann",
            followers: "8k followers",
            content: "This social media platform is fire.",
            likes: 22,
            comments: 22,
            time: "2d ago",
            images: [],
        },
        {
            id: 3,
            profilePic: "/images/profile.jpg",
            name: "Gillbert Hann",
            followers: "8k followers",
            content: "",
            likes: 22,
            comments: 22,
            time: "2d ago",
            images: ["images/profile.jpg"],
        },
        {
            id: 4,
            profilePic: "/images/profile2.jpg",
            name: "Adam Chile",
            followers: "160k followers",
            content: "What a day!",
            likes: "10k",
            comments: "1.2k",
            time: "2d ago",
            images: [
                "images/restaurant.jpg",
                "images/food.jpg",
                "images/profile.jpg",
                "images/holiday.jpg",
            ],
        },
    ]

    return (
        <>
            <div className="flex flex-col gap-2 bg-white dark:bg-zinc-900/60 rounded-xl border dark:border-zinc-800 ">
                {/* Render each post from data with your original styling */}
                {posts.map((p, idx) => (
                    <div key={p.id}>
                        <PostCard
                            profilePic={p.profilePic}
                            name={p.name}
                            followers={p.followers}
                            content={p.content}
                            likes={p.likes}
                            comments={p.comments}
                            time={p.time}
                            images={p.images}
                            liked={idx === 1} // mirrors your second static card having red heart
                        />
                        {idx !== posts.length - 1 && (
                            <div className="h-0.5 dark:bg-zinc-800 bg-zinc-200/80" />
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Posts
