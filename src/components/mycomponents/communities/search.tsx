import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState } from "react"

function SearchCommunities() {
    const [searchValue, setSearchValue] = useState("");
    return (
        <>
            <div className="p-2 bg-white dark:bg-zinc-900 border rounded-2xl flex">
                <div className="relative">
                    <Search className="pointer-events-none absolute left-2 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted-foreground" />
                    <Input
                        type="text"
                        placeholder="Search communities"
                        className="pl-9 max-w-64 w-full h-8 border-none rounded-lg transition-all duration-200"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>
            </div>
        </>
    )
}
export default SearchCommunities