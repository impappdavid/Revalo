import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function ClipInfos() {
    


    const [searchValue, setSearchValue] = useState("");

    const comments = [
        { id: 1, user: "User1", text: "Awesome clip!" },
        { id: 2, user: "User2", text: "Love this!" },
        { id: 3, user: "User3", text: "Cool video!" },
        { id: 4, user: "User4", text: "Very nice work." },
    ];


    return (
        <div className="w-full lg:max-w-76 hidden lg:flex flex-col justify-start items-start gap-4 bg-white dark:bg-zinc-900 p-2 px-3 rounded-2xl border">
            <div className="flex flex-col w-full items-start gap-1">
                <div className="font-medium text-lg">Comments</div>
                <Separator />
            </div>



            <div className="flex flex-col w-full h-full max-h-[800px] overflow-y-auto gap-4">
                {comments.map((comment) => (
                    <div key={comment.id} className="text-sm flex w-full gap-2">
                        <div className="min-w-9 h-9 bg-black dark:bg-white rounded-full"></div>
                        <div className="flex flex-col w-full">
                            <div className="flex w-full justify-between items-center">
                                <span className="font-semibold text-sm">{comment.user}</span>
                                <div className="text-xs text-zinc-600 dark:text-zinc-400">8h ago</div>
                            </div>
                            <span className="text-xs">{comment.text}</span>
                            <div className="flex w-full justify-between items-center">
                                <Heart className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400 hover:text-red-500 cursor-pointer" />
                                <div className="text-xs text-zinc-600 dark:text-zinc-400 hover:underline cursor-pointer">reply</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full flex flex-col gap-2">
                <Separator />
                
                <div className="relative flex">
                    <div className="min-w-8 h-8 rounded-full bg-black"></div>
                    <Input
                        type="text"
                        placeholder="Write something"
                        className=" max-w-64 w-full h-8 border-none rounded-lg transition-all duration-200"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}