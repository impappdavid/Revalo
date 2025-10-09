import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function JobFilter() {

    return (
        <div className="bg-white dark:bg-zinc-900 border rounded-2xl p-3 w-full h-[900px] flex flex-col gap-2">
            <div className="font-medium text-lg">Filter</div>
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <div className="font-medium text-sm">Search</div>
                    <Input type="text" placeholder="Search by job title" className="h-8 bg-zinc-200/60 dark:bg-zinc-800/60 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all duration-200" />
                </div>

                <div className="flex flex-col gap-1">
                    <div className="font-medium text-sm">Commitment</div>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="All" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="fulltime">Fulltime</SelectItem>
                                <SelectItem value="internship">Internship</SelectItem>
                                <SelectItem value="contract">Contract</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex flex-col gap-1">
                    <div className="font-medium text-sm">Experience</div>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Any" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="zerotoone">0 - 1 year</SelectItem>
                                <SelectItem value="onetothree">1 - 3 year</SelectItem>
                                <SelectItem value="threetosix">3 - 6 year</SelectItem>
                                <SelectItem value="sixtoeleven">6 - 11 year</SelectItem>
                                <SelectItem value="elevenplus">11+ year</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex flex-col gap-1">
                    <div className="font-medium text-sm">Location</div>
                    <Input type="text" placeholder="Search..." className="h-8 bg-zinc-200/60 dark:bg-zinc-800/60 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all duration-200" />
                </div>

                <div className="flex flex-col gap-1">
                    <div className="font-medium text-sm">Remote</div>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="zerotoone">Remote OK</SelectItem>
                                <SelectItem value="onetothree">Remote Only</SelectItem>
                                <SelectItem value="threetosix">Not Remote</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex flex-col gap-1">
                    <div className="font-medium text-sm">Job Language</div>
                    <Input type="text" placeholder="Search..." className="h-8 bg-zinc-200/60 dark:bg-zinc-800/60 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all duration-200" />
                </div>

                <div className="flex flex-col gap-1 pl-0.5">
                    <div className="flex items-center space-x-2 ">
                        <Checkbox id="terms" className="border-blue-500" />
                        <Label htmlFor="terms" className="text-sm text-zinc-600 dark:text-zinc-400 cursor-pointer">Has salary range</Label>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default JobFilter;
