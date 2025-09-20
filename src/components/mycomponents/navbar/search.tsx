import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

function SearchField() {
    return (
        <>
            <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted-foreground" />
                <Input
                    type="text"
                    placeholder="Search"
                    className="pl-10 max-w-64 w-full h-8 border-none rounded-lg bg-zinc-200/60 hover:bg-zinc-200 dark:bg-zinc-800/60 dark:hover:bg-zinc-800 transition-all duration-200"
                />
            </div>
        </>
    )
}
export default SearchField