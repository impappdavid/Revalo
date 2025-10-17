import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Ellipsis, Star, TriangleAlert, X } from "lucide-react"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
} from "@/components/ui/dialog"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"



function DropDown() {

    const [openReview, setOpenReview] = useState(false)
    const [openReport, setOpenReport] = useState(false)
    const [hoverRating, setHoverRating] = useState(0);
    const [selectedRating, setSelectedRating] = useState(0);

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger className="outline-none">

                    <div className="p-2 hover:bg-zinc-200/80 dark:hover:bg-zinc-800/80 rounded-lg text-zinc-600 dark:text-zinc-400 cursor-pointer transition-all duration-200">
                        <Ellipsis className="w-4 h-4 " />
                    </div>

                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-44 rounded-xl p-1 flex flex-col gap-0.5" align="end">
                    <DropdownMenuItem className="px-2 py-1.5 rounded-md flex gap-2 cursor-pointer" onClick={(e) => { e.preventDefault(); setOpenReview(true) }}>
                        <Star className="w-4 h-4" />
                        <div className="text-xs">Give a Review</div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="px-2 py-1.5 rounded-md flex gap-2 cursor-pointer" onClick={(e) => { e.preventDefault(); setOpenReport(true) }}>
                        <TriangleAlert className="w-4 h-4 text-red-500" />
                        <div className="text-xs">Report</div>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <Dialog open={openReview} onOpenChange={setOpenReview}>

                <DialogContent className="sm:max-w-md ">
                    <div className="relative flex flex-col gap-4">
                        <div className="flex justify-center w-full items-center py-2 rounded-xl ">
                            <div className="text-2xl font-medium">Give McDonald's a review</div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <div className="flex gap-2">

                                {[1, 2, 3, 4, 5].map((star) => {
                                    const isFilled = star <= (hoverRating || selectedRating);
                                    return (
                                        <Star
                                            key={star}
                                            className={`w-8 h-8 cursor-pointer transition-colors ${isFilled ? 'text-yellow-400 fill-yellow' : 'text-zinc-400'
                                                }`}
                                            onMouseEnter={() => setHoverRating(star)}
                                            onMouseLeave={() => setHoverRating(0)}
                                            onClick={() => setSelectedRating(star)}
                                        />
                                    );
                                })}

                            </div>


                            <div className="w-full">
                                <Textarea placeholder="Type your experience here." />
                            </div>

                        </div>
                        <DialogClose className="absolute -top-3 -right-14 bg-zinc-100 dark:bg-zinc-900 border text-zinc-400 hover:bg-zinc-200 hover:text-zinc-600 dark:hover:text-zinc-200 cursor-pointer p-2 dark:hover:bg-zinc-800/50 backdrop-blur-2xl rounded-xl transition-all duration-200 outline-none">
                            <X className="w-5 h-5  transition-all duration-200" />
                        </DialogClose>
                    </div>
                    <DialogFooter className="mt-2 w-full">
                        <div className="flex justify-center w-full items-center font-medium text-white p-2 bg-blue-500/80 hover:bg-blue-500 rounded-lg cursor-pointer transition-all duration-200">
                            <div>Submit {selectedRating} Star Review</div>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <Dialog open={openReport} onOpenChange={setOpenReport}>

                <DialogContent className="sm:max-w-md ">
                    <div className="relative flex flex-col gap-4">
                        <div className="flex justify-center w-full items-center py-2 rounded-xl ">
                            <div className="text-2xl font-medium">Report McDonald's</div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4">

                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a Topic" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="missingitem">Missing Item</SelectItem>
                                        <SelectItem value="didntarrive">Didn't arrive</SelectItem>
                                        <SelectItem value="wrongwithfood">Something wrong with the food</SelectItem>
                                        <SelectItem value="refund">Request Refund</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <div className="w-full">
                                <Textarea placeholder="Type your problem here." />
                            </div>

                        </div>
                        <DialogClose className="absolute -top-3 -right-14 bg-zinc-100 dark:bg-zinc-900 border text-zinc-400 hover:bg-zinc-200 hover:text-zinc-600 dark:hover:text-zinc-200 cursor-pointer p-2 dark:hover:bg-zinc-800/50 backdrop-blur-2xl rounded-xl transition-all duration-200 outline-none">
                            <X className="w-5 h-5  transition-all duration-200" />
                        </DialogClose>
                    </div>
                    <DialogFooter className="mt-2 w-full">
                        <div className="flex justify-center w-full items-center font-medium text-white p-2 bg-blue-500/80 hover:bg-blue-500 rounded-lg cursor-pointer transition-all duration-200">
                            <div>Submit Report</div>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
export default DropDown