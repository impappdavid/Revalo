import { GalleryVerticalEnd, Pen } from "lucide-react"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

function UserInfos() {
    return (
        <>
            <div className="w-full bg-zinc-900 rounded-2xl border">
                <div className="h-50 bg-gradient-to-bl from-zinc-800 to-zinc-700 rounded-2xl flex justify-end p-4">
                    <div className="flex gap-1.5 items-center bg-black/50 h-fit p-2 px-4 rounded-lg text-sm text-white font-medium cursor-pointer hover:opacity-80 transition-all duration-200">
                        <Pen className="w-4 h-4" />
                        Change Cover
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 p-4 pt-0 -mt-10 sm:-mt-12">
                    <div className="w-24 h-24 sm:min-w-32 sm:min-h-32 border-4 border-blue-500 rounded-full flex justify-center items-center">
                        <img src="/images/profile.jpg" alt="profile" className="w-20 h-20 sm:min-w-28 sm:min-h-28 rounded-full" />
                    </div>
                    <div className="flex justify-between items-center mt-12 w-full">
                        <div className="flex flex-col justify-end">
                            <div className="text-2xl font-semibold">Papp David</div>
                            <div className="text-sm text-zinc-500 dark:text-zinc-400">@pappdavid</div>
                        </div>
                        <div className="">
                            <div className="bg-blue-500 hover:bg-blue-500/80 transition-all duration-200 cursor-pointer text-white rounded-lg h-8 px-4 flex justify-center items-center">
                                Edit Profile
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-3 gap-2">
                <div className="bg-zinc-900 p-2 rounded-2xl col-span-2 border border-zinc-800">
                    <Tabs defaultValue="photos">
                        <TabsList>
                            <TabsTrigger value="photos">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                    <g fill="none">
                                        <path className="stroke-zinc-600 dark:stroke-zinc-400" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.33 17.657c.11-.366.17-.755.17-1.157v-9a4 4 0 0 0-4-4h-9a4 4 0 0 0-4 4v9.07m16.83 1.087l-.088-.104l-2.466-2.976a2 2 0 0 0-3.073-.008l-1.312 1.566l-.214.261m7.153 1.26a4 4 0 0 1-3.713 2.842m0 0l-.117.002h-9a4 4 0 0 1-4-3.93m13.117 3.928l-.093-.106l-3.347-3.996m-9.676.175l.177-.201l3.206-3.827a2 2 0 0 1 3.066 0l3.227 3.853" />
                                        <circle cx="15.091" cy="8.909" r="1.5" className="fill-blue-500 dark:fill-blue-400" />
                                    </g>
                                </svg>
                                Photos
                            </TabsTrigger>
                            <TabsTrigger value="clips">
                                <GalleryVerticalEnd className="text-zinc-500 dark:text-zinc-400 w-4.5 h-4.5" />
                                Clips
                            </TabsTrigger>
                            <TabsTrigger value="music">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14" className="stroke-zinc-500 dark:stroke-zinc-400">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M1 5.616v2.768M4 3.31v7.381m3-9.689v11.996m3-9.688v7.381m3-5.075v2.768" stroke-width="1" />
                                </svg>
                                Music
                            </TabsTrigger>
                            <TabsTrigger value="posts">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256" className="fill-zinc-500 dark:fill-zinc-400">
                                    <path d="M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 160H44V60h168ZM60 92a16 16 0 1 1 16 16a16 16 0 0 1-16-16m48 0a16 16 0 1 1 16 16a16 16 0 0 1-16-16" />
                                </svg>
                                Posts
                            </TabsTrigger>
                            <TabsTrigger value="albums">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                    <g fill="none" className="stroke-zinc-600 dark:stroke-zinc-400" stroke-width="1">
                                        <path stroke-width="1.5" d="M6 17.975c.129 1.308.42 2.189 1.077 2.846C8.256 22 10.154 22 13.949 22s5.693 0 6.872-1.18C22 19.643 22 17.745 22 13.95s0-5.693-1.18-6.872c-.656-.657-1.537-.948-2.846-1.077" />
                                        <path stroke-width="1.5" d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2s5.657 0 6.828 1.172S18 6.229 18 10s0 5.657-1.172 6.828S13.771 18 10 18s-5.657 0-6.828-1.172S2 13.771 2 10Z" />
                                        <path stroke-linejoin="round" stroke-width="1.5" d="M2 11.119a15 15 0 0 1 1.872-.117c2.652-.049 5.239.674 7.3 2.04C13.081 14.31 14.424 16.053 15 18" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h.009" />
                                    </g>
                                </svg>
                                Albums
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="photos" >
                            <div className="p-12 flex flex-col jusitfy-center items-center gap-4">
                                <div className="text-sm text-zinc-400">You haven't added any photos yet</div>
                                <div className="bg-blue-500 hover:bg-blue-500/80 transition-all duration-200 cursor-pointer text-white rounded-lg h-8 px-4 flex justify-center items-center">
                                    Upload Photo
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="clips">

                        </TabsContent>
                        <TabsContent value="music">

                        </TabsContent>
                        <TabsContent value="posts">

                        </TabsContent>
                        <TabsContent value="albums">

                        </TabsContent>
                    </Tabs>
                </div>
                <div className="bg-zinc-900 px-3 p-2 rounded-2xl border border-zinc-800">
                    <div className="text-white font-medium">Friends</div>
                    <div className="p-8 flex flex-col jusitfy-center items-center gap-2">
                        <div className="text-sm text-zinc-400">You haven't added any friends yet</div>
                        <div className=" dark:hover:bg-zinc-800 transition-all duration-200 cursor-pointer text-white rounded-lg h-8 px-4 flex justify-center items-center">
                           Add friends
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserInfos