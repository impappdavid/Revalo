import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

function Header() {
    return (
        <>
            <div className="p-6 bg-zinc-900 border rounded-3xl flex flex-col gap-2">
                <div className="font-semibold text-xl">My Photos</div>

                <div className="flex justify-between items-center w-full">
                    <Tabs defaultValue="photos" className="w-full">
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
                        <TabsContent value="photos" className="bg-zinc-800 rounded-2xl p-6">
                            <div className=" flex flex-col jusitfy-center items-center gap-4">
                                <div className="text-sm text-zinc-400">You haven't added any photos yet</div>
                                <div className="bg-blue-500 hover:bg-blue-500/80 transition-all duration-200 cursor-pointer text-white rounded-lg h-8 px-4 flex justify-center items-center">
                                    Upload Photo
                                </div>
                            </div>
                        </TabsContent>
                        
                        <TabsContent value="albums">
                            <div className="p-12 flex flex-col jusitfy-center items-center gap-4">
                                <div className="text-sm text-zinc-400">You don1t have any albums yet</div>
                                <div className="bg-blue-500 hover:bg-blue-500/80 transition-all duration-200 cursor-pointer text-white rounded-lg h-8 px-4 flex justify-center items-center">
                                    Create Album
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </>
    )
}
export default Header