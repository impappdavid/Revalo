import { CaseSensitive, Ellipsis, LockOpen, Plus, Settings2, X } from "lucide-react"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

function CreateStory() {
    return (
        <>
            <Dialog>
                <DialogTrigger>
                    <div className="h-34 bg-zinc-200 w-24 rounded-xl relative hover:opacity-80 transition-all duration-200 cursor-pointer">
                        <img src="/images/profile3.jpg" alt="" className="w-full h-full object-cover rounded-xl" />
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer">
                            <div className="bg-black/60 backdrop-blur-2xl p-2 rounded-full">
                                <Plus className="text-white" />
                            </div>
                            <div className="text-black text-sm">Story</div>
                        </div>
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-3xl max-w-lg">
                    <div className="relative">
                        <div className="grid grid-cols-2  gap-2 h-[650px]">
                            <div className="p-2 bg-zinc-200/60 dark:bg-zinc-800/50 rounded-2xl flex flex-col justify-center items-center">
                                <label className="group flex h-full w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed bg-zinc-400/20 dark:bg-zinc-900/20 hover:bg-zinc-400/30 dark:hover:bg-zinc-800/20 px-6 text-center transition-colors ">
                                    <div className="grid place-items-center rounded-md border-2 border-dashed border-zinc-700 dark:border-zinc-300 p-4 transition-colors ">
                                        <svg className="h-6 w-6 text-zinc-700 dark:text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 7.5 12 3m0 0 4.5 4.5M12 3v12" />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-zinc-700 dark:text-zinc-300 font-medium">Drag and drop photo or video here</p>
                                    <span className="inline-flex items-center rounded-lg bg-blue-500  px-6 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-500/80 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                        Select file
                                    </span>
                                    <span className="text-sm text-zinc-700 dark:text-zinc-300 py-1.5 px-3 hover:bg-zinc-300 dark:hover:bg-zinc-900/80 rounded-lg font-medium transition-all duration-200">Select background</span>
                                    <input id="file" name="file" type="file" accept="image/*,video/*" className="sr-only" />
                                </label>
                            </div>

                            <div className="flex flex-col justify-between w-full h-full ">
                                <div className="flex flex-col">
                                    <div className="flex gap-2 items-center hover:bg-zinc-200/80 dark:hover:bg-zinc-800/50 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200">
                                        <CaseSensitive className="w-5.5 h-5.5 text-zinc-600 dark:text-zinc-400" />
                                        <div className="text-zinc-900 dark:text-zinc-100 text-sm">Text</div>
                                    </div>
                                    <div className="flex gap-2 items-center hover:bg-zinc-200/80 dark:hover:bg-zinc-800/50 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 28 28" className="fill-zinc-600 dark:fill-zinc-400">
                                            <path d="M9.566 16.51q-.003-.005 0 0M10 8a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m8 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m3-5a4 4 0 0 1 4 4v7.343c0 1.26-.5 2.468-1.392 3.36l-5.906 5.905A4.75 4.75 0 0 1 14.342 25H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM7 4.5A2.5 2.5 0 0 0 4.5 7v14A2.5 2.5 0 0 0 7 23.5h7.343q.334-.001.657-.068v-3.985a10 10 0 0 1-1 .053c-1.88 0-3.252-.472-4.168-.965a6 6 0 0 1-1.025-.687a2.8 2.8 0 0 1-.423-.42a.75.75 0 0 1 1.182-.918c.013.006.025.025.036.035q.05.052.17.154c.16.135.414.324.771.516c.71.382 1.838.785 3.457.785c.353 0 1.018-.04 1.018-.04c0-1.93 1.903-3.46 3.732-3.46h4.746q.004-.078.004-.157V7A2.5 2.5 0 0 0 21 4.5zM18.75 16a2.25 2.25 0 0 0-2.25 2.25v4.43q.072-.064.142-.132l5.906-5.906q.291-.293.498-.642z" />
                                        </svg>
                                        <div className="text-zinc-900 dark:text-zinc-100 text-sm">Stickers</div>
                                    </div>
                                    <div className="flex gap-2 items-center hover:bg-zinc-200/80 dark:hover:bg-zinc-800/50 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className="fill-zinc-600 dark:fill-zinc-400">
                                            <path d="M19.642 6.653c-1.31 1.812-3.251 3.86-4.945 5.575l-.091.092l-2.69-2.69l.098-.098c1.69-1.71 3.732-3.656 5.544-4.962c.911-.657 1.715-1.115 2.353-1.318c.652-.207.915-.091 1.039.033c.113.113.231.367.019 1.02c-.207.635-.668 1.436-1.327 2.348M10.9 10.736l2.605 2.605c-.88.754-1.684 1.294-2.378 1.655a4.83 4.83 0 0 0-1.892-1.89c.36-.69.903-1.482 1.665-2.37m-3.086 1.856a4.83 4.83 0 0 0-4.33 1.328c-.525.525-.88 1.302-1.13 2.079c-.256.795-.43 1.682-.541 2.507a19 19 0 0 0-.173 2.216c-.004.3.003.567.022.778c.009.104.022.212.044.31c.01.05.027.113.053.18c.02.051.074.178.19.295c.117.117.245.17.297.19c.066.026.13.043.178.054c.099.021.207.035.31.044c.211.019.479.025.779.021c.603-.008 1.39-.06 2.216-.172c.825-.112 1.711-.285 2.507-.54c.776-.25 1.553-.606 2.079-1.132a4.83 4.83 0 0 0 1.327-4.333c1.209-.6 2.622-1.618 4.121-3.135c1.694-1.714 3.709-3.835 5.093-5.75c.688-.952 1.258-1.904 1.538-2.764c.274-.842.334-1.826-.384-2.544c-.72-.719-1.703-.672-2.555-.401c-.865.275-1.822.843-2.776 1.53c-1.92 1.384-4.036 3.407-5.733 5.125c-1.5 1.518-2.53 2.896-3.132 4.114m1.44 2.388a3.33 3.33 0 0 1 0 4.71c-.271.27-.774.537-1.478.763c-.684.22-1.477.378-2.248.482c-.769.104-1.495.152-2.035.16a9 9 0 0 1-.351-.002a9 9 0 0 1-.002-.35c.007-.542.055-1.267.16-2.036c.104-.771.261-1.564.481-2.249c.227-.703.493-1.206.764-1.478a3.33 3.33 0 0 1 4.71 0Z" />
                                        </svg>
                                        <div className="text-zinc-900 dark:text-zinc-100 text-sm">Paintbrush</div>
                                    </div>
                                    <div className="flex gap-2 items-center hover:bg-zinc-200/80 dark:hover:bg-zinc-800/50 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className="stroke-zinc-600 dark:stroke-zinc-400">
                                            <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.253 20.302C5.655 21.5 7.77 21.5 12 21.5s6.345 0 7.747-1.198q.3-.256.555-.555C21.5 18.345 21.5 16.23 21.5 12s0-6.345-1.198-7.747q-.256-.3-.555-.555C18.345 2.5 16.23 2.5 12 2.5s-6.345 0-7.747 1.198q-.3.256-.555.555C2.5 5.655 2.5 7.77 2.5 12s0 6.345 1.198 7.747q.256.3.555.555M4 20L20 4M2.698 15.802L15.806 2.694m5.5 5.5L8.198 21.302m5.302.198l8-8m-19-3l8-8" />
                                        </svg>
                                        <div className="text-zinc-900 dark:text-zinc-100 text-sm">Background</div>
                                    </div>
                                    <div className="flex gap-2 items-center hover:bg-zinc-200/80 dark:hover:bg-zinc-800/50 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48">
                                            <defs>
                                                <mask id="SVGRa3Mgdns">
                                                    <g fill="none" className="stroke-zinc-600 dark:stroke-zinc-400" stroke-linejoin="round" stroke-width="4">
                                                        <path d="M24 40.944A11.96 11.96 0 0 0 32 44c6.627 0 12-5.373 12-12c0-5.591-3.824-10.29-9-11.622" />
                                                        <path d="M13 20.378C7.824 21.71 4 26.408 4 32c0 6.627 5.373 12 12 12s12-5.373 12-12c0-1.55-.294-3.03-.828-4.39" />
                                                        <path className="fill-zinc-600 dark:fill-zinc-400" d="M24 28c6.627 0 12-5.373 12-12S30.627 4 24 4S12 9.373 12 16s5.373 12 12 12Z" />
                                                    </g>
                                                </mask>
                                            </defs>
                                            <path className="fill-zinc-600 dark:fill-zinc-400" d="M0 0h48v48H0z" mask="url(#SVGRa3Mgdns)" />
                                        </svg>
                                        <div className="text-zinc-900 dark:text-zinc-100 text-sm">Filters</div>
                                    </div>
                                    <div className="flex gap-2 items-center hover:bg-zinc-200/80 dark:hover:bg-zinc-800/50 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200">
                                        <Settings2 className="w-4.5 h-4.5 text-zinc-600 dark:text-zinc-400" />
                                        <div className="text-zinc-900 dark:text-zinc-100 text-sm">Color correction</div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col">
                                        <div className="flex gap-2 items-center hover:bg-zinc-200/80 dark:hover:bg-zinc-800/50 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200">
                                            <LockOpen className="w-4.5 h-4.5 text-zinc-600 dark:text-zinc-400" />
                                            <div className="text-zinc-900 dark:text-zinc-100 text-sm">Everyone</div>
                                        </div>
                                        <div className="flex gap-2 items-center hover:bg-zinc-200/80 dark:hover:bg-zinc-800/50 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200">
                                            <Ellipsis className="w-4.5 h-4.5 text-zinc-600 dark:text-zinc-400" />
                                            <div className="text-zinc-900 dark:text-zinc-100 text-sm">More</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-center bg-blue-500 hover:bg-blue-500/80 justify-center px-3 py-2 rounded-lg cursor-pointer transition-all duration-200">
                                        <div className="text-zinc-100 text-sm">Publish</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <DialogClose className="absolute -top-3 -right-14 bg-zinc-100 dark:bg-zinc-900 border text-zinc-400 hover:bg-zinc-200 hover:text-zinc-600 dark:hover:text-zinc-200 cursor-pointer p-2 dark:hover:bg-zinc-800/50 backdrop-blur-2xl rounded-xl transition-all duration-200">
                            <X className="w-5 h-5  transition-all duration-200" />
                        </DialogClose>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}
export default CreateStory;