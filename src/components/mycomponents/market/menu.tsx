import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState } from "react";

function Menu() {
    const [searchValue, setSearchValue] = useState("");
    return (
        <>
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border p-2 flex flex-col gap-2">
                <div className="flex justify-between p-1 w-full border-b pb-2">

                    <div className="w-24 flex gap-2 items-center border-r pr-3 group cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="stroke-zinc-600 dark:stroke-zinc-400 group-hover:stroke-black dark:group-hover:stroke-white transition duration-200">
                            <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5h12M4 12h16M4 19h8" />
                        </svg>
                        <div className="text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition duration-200">Catalog</div>
                    </div>

                    <div className="w-full">
                        <div className="relative">
                            <Search className="pointer-events-none absolute left-2 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search Market"
                                className="pl-9 w-full h-7 border-none rounded-lg transition-all duration-200"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="w-20 flex gap-2 items-center border-l pl-3 group cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="stroke-zinc-600 dark:stroke-zinc-400 group-hover:stroke-black dark:group-hover:stroke-white transition duration-200">
                            <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 21a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-8 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M3.71 5.4h15.214c1.378 0 2.373 1.27 1.995 2.548l-1.654 5.6C19.01 14.408 18.196 15 17.27 15H8.112c-.927 0-1.742-.593-1.996-1.452zm0 0L3 3" />
                        </svg>
                        <div className="text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition duration-200">Cart</div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 p-2">
                    <div className="flex flex-col gap-1 cursor-pointer hover:opacity-80 transition-all duration-200">
                        <div className="bg-emerald-400/20 w-12 h-12 flex justify-center items-center rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-emerald-500">
                                <path d="M16 21H8a1 1 0 0 1-1-1v-7.93l-1.3 1.05c-.39.38-1.02.38-1.41 0l-2.83-2.83a.996.996 0 0 1 0-1.41L7.34 3H9c0 1.1 1.34 2 3 2s3-.9 3-2h1.66l5.88 5.88c.39.39.39 1.02 0 1.41l-2.83 2.83c-.39.38-1.02.38-1.41 0L17 12.07V20a1 1 0 0 1-1 1m4.42-11.42l-4.31-4.3c-.31.35-.68.66-1.11.92c-.84.5-1.87.8-3 .8c-1.7 0-3.21-.68-4.11-1.72l-4.31 4.3L5 11l3-2h1v10h6V9h1l3 2z" />
                            </svg>
                        </div>
                        <div className="text-xs text-center text-zinc-700 dark:text-zinc-300">Fashion</div>
                    </div>

                    <div className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-80 transition-all duration-200">
                        <div className="bg-blue-400/20 w-12 h-12 flex justify-center items-center rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-blue-400">
                                <path fill-rule="evenodd" d="M8.905 4.25h6.19c.838 0 1.372 0 1.832.091a4.75 4.75 0 0 1 3.732 3.732l-.736.147l.736-.147c.07.35.086.743.09 1.28A2.75 2.75 0 0 1 22.75 12v2.444c0 1.53-.798 2.874-2 3.637V19a.75.75 0 0 1-1.5 0v-.325q-.392.075-.806.075H5.556q-.414 0-.806-.075V19a.75.75 0 0 1-1.5 0v-.919a4.3 4.3 0 0 1-2-3.636V12c0-1.26.846-2.32 2.001-2.647c.004-.537.02-.93.09-1.28a4.75 4.75 0 0 1 3.732-3.732c.46-.091.994-.091 1.832-.091M4.752 9.354A2.75 2.75 0 0 1 6.75 12v1.2c0 .028.022.05.05.05h10.4a.05.05 0 0 0 .05-.05V12c0-1.258.845-2.319 1.998-2.646c-.004-.51-.017-.77-.06-.988a3.25 3.25 0 0 0-2.554-2.554c-.296-.058-.669-.062-1.634-.062H9c-.965 0-1.338.004-1.634.062a3.25 3.25 0 0 0-2.554 2.554c-.043.218-.056.479-.06.988M4 10.75c-.69 0-1.25.56-1.25 1.25v2.444a2.806 2.806 0 0 0 2.806 2.806h12.888a2.806 2.806 0 0 0 2.806-2.806V12a1.25 1.25 0 0 0-2.5 0v1.2a1.55 1.55 0 0 1-1.55 1.55H6.8a1.55 1.55 0 0 1-1.55-1.55V12c0-.69-.56-1.25-1.25-1.25" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div className="text-xs text-center text-zinc-700 dark:text-zinc-300">Home</div>
                    </div>

                    <div className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-80 transition-all duration-200">
                        <div className="bg-pink-400/20 w-12 h-12 flex justify-center items-center rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" className="stroke-pink-400">
                                <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M29 24h12v20H29zM7 24h14v20H7zm3-12.545V24h8V4c-6.5 0-8 5.636-8 7.454M7 32h14" />
                            </svg>
                        </div>
                        <div className="text-xs text-center text-zinc-700 dark:text-zinc-300">Beauty</div>
                    </div>

                    <div className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-80 transition-all duration-200">
                        <div className="bg-orange-400/20 w-12 h-12 flex justify-center items-center rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="stroke-orange-400">
                                <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                                    <path d="M2 17c2.457 2.455 6.027 4 10 4s7.543-1.545 10-4" />
                                    <path d="m20.5 17.5l-1.555-1.815A6 6 0 0 1 17.5 11.78V9l.5-1l3 1l1-1.5l-3.5-3V3L17 4.5s-2.242 1.121-2.85 4.009c-.17.81-.822 1.491-1.65 1.491h-2.458A2.54 2.54 0 0 0 7.5 12.542c0 .953-.268 1.886-.773 2.694L4.5 18.5" />
                                    <path d="M8.5 10.5s-.63-.261-.988-.975C7.156 8.81 6.556 8.5 5.854 8.5C4.83 8.5 4 9.33 4 10.354v1.232C4 12.49 3.64 13.36 3 14m16 5l-2.462-2.77a5.156 5.156 0 0 0-8.078.47L6.5 19.5" />
                                </g>
                            </svg>
                        </div>
                        <div className="text-xs text-center text-zinc-700 dark:text-zinc-300">For Kids</div>
                    </div>

                    <div className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-80 transition-all duration-200">
                        <div className="bg-violet-400/20 w-12 h-12 flex justify-center items-center rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-violet-400">
                                <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2zM4 6h16v10H4z" />
                            </svg>
                        </div>
                        <div className="text-xs text-center text-zinc-700 dark:text-zinc-300">Electronics</div>
                    </div>

                    <div className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-80 transition-all duration-200">
                        <div className="bg-red-400/20 w-12 h-12 flex justify-center items-center rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" className="stroke-red-400">
                                <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="3">
                                    <path d="M3 24c0 11.598 9.402 21 21 21s21-9.402 21-21S35.598 3 24 3S3 12.402 3 24" />
                                    <path d="M44.975 25.024c-10.782.518-19.433 9.169-19.95 19.951M38.75 9.25l-29.5 29.5m0-29.5l29.5 29.5M22.974 3.024c-.52 10.782-9.168 19.43-19.95 19.95" />
                                </g>
                            </svg>
                        </div>
                        <div className="text-xs text-center text-zinc-700 dark:text-zinc-300">Sports</div>
                    </div>

                    <div className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-80 transition-all duration-200">
                        <div className="bg-green-400/20 w-12 h-12 flex justify-center items-center rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-green-400">
                                <path d="M5.33 3.272a3.5 3.5 0 0 1 4.254 4.962l10.709 10.71l-1.414 1.414l-10.71-10.71a3.502 3.502 0 0 1-4.962-4.255L5.444 7.63a1.5 1.5 0 0 0 2.121-2.121zm10.367 1.883l3.182-1.768l1.414 1.415l-1.768 3.182l-1.768.353l-2.12 2.121l-1.415-1.414l2.121-2.121zm-6.718 8.132l1.415 1.414l-5.304 5.303a1 1 0 0 1-1.492-1.327l.078-.087z" />
                            </svg>
                        </div>
                        <div className="text-xs text-center text-zinc-700 dark:text-zinc-300">Repair</div>
                    </div>

                    <div className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-80 transition-all duration-200">
                        <div className="bg-yellow-400/20 w-12 h-12 flex justify-center items-center rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-yellow-400">
                                <path d="M12 22A10 10 0 0 1 2 12A10 10 0 0 1 12 2c5.5 0 10 4 10 9a6 6 0 0 1-6 6h-1.8c-.3 0-.5.2-.5.5c0 .1.1.2.1.3c.4.5.6 1.1.6 1.7c.1 1.4-1 2.5-2.4 2.5m0-18a8 8 0 0 0-8 8a8 8 0 0 0 8 8c.3 0 .5-.2.5-.5c0-.2-.1-.3-.1-.4c-.4-.5-.6-1-.6-1.6c0-1.4 1.1-2.5 2.5-2.5H16a4 4 0 0 0 4-4c0-3.9-3.6-7-8-7m-5.5 6c.8 0 1.5.7 1.5 1.5S7.3 13 6.5 13S5 12.3 5 11.5S5.7 10 6.5 10m3-4c.8 0 1.5.7 1.5 1.5S10.3 9 9.5 9S8 8.3 8 7.5S8.7 6 9.5 6m5 0c.8 0 1.5.7 1.5 1.5S15.3 9 14.5 9S13 8.3 13 7.5S13.7 6 14.5 6m3 4c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5" />
                            </svg>
                        </div>
                        <div className="text-xs text-center text-zinc-700 dark:text-zinc-300">Hobbies</div>
                    </div>
                    <div className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-80 transition-all duration-200">
                        <div className="bg-sky-400/20 w-12 h-12 flex justify-center items-center rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36" className="fill-sky-400">
                                <path  d="M15 17h3v2h-3z" className="clr-i-outline clr-i-outline-path-1" />
                                <path  d="M26.45 14.17A22.1 22.1 0 0 0 19.38 7a9.64 9.64 0 0 0-9-.7a8.6 8.6 0 0 0-4.82 6.4c-.08.47-.14.92-.2 1.36A4 4 0 0 0 2 18v6.13a2 2 0 0 0 2 2V18a2 2 0 0 1 2-2h18.73A7.28 7.28 0 0 1 32 23.27V24h-2a4.53 4.53 0 1 0 .33 2H32a2 2 0 0 0 2-2v-.73a9.28 9.28 0 0 0-7.55-9.1M11 14H6.93c0-.31.09-.63.15-1A6.52 6.52 0 0 1 11 8Zm2 0V7.58a8.17 8.17 0 0 1 5.36 1.16A19 19 0 0 1 23.9 14Zm12.8 14.38a2.5 2.5 0 1 1 2.5-2.5a2.5 2.5 0 0 1-2.5 2.5" className="clr-i-outline clr-i-outline-path-2" />
                                <path  d="M14.17 24a4.53 4.53 0 1 0 .33 2h5.3v-.25A6 6 0 0 1 20 24ZM10 28.38a2.5 2.5 0 1 1 2.5-2.5a2.5 2.5 0 0 1-2.5 2.5" className="clr-i-outline clr-i-outline-path-3" />
                                <path fill="none" d="M0 0h36v36H0z" />
                            </svg>
                        </div>
                        <div className="text-xs text-center text-zinc-700 dark:text-zinc-300">Vehicles</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Menu