import { Link } from "react-router-dom";
import type { Job } from "./types";
import { EllipsisVertical, Settings } from "lucide-react";

interface JobListProps {
    jobs: Job[];
}

function JobList({ jobs }: JobListProps) {
    return (
        <div className="bg-white dark:bg-zinc-900 border h-[900px] flex flex-col rounded-2xl overflow-y-scroll">
            <div className="p-3 text-xl font-medium flex justify-between items-center border-b">
                <div className="flex gap-1 items-center">
                    <div className="">Jobs</div>
                    <div className="text-xs text-zinc-600 dark:text-zinc-400">(36 results)</div>
                </div>
                <div className="p-1.5 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-200/80 dark:hover:bg-zinc-800 rounded-sm cursor-pointer transition-all duration-200">
                    <Settings className="w-4 h-4 " />
                </div>
            </div>
            {jobs.map((job) => (
                <Link to={`/job/${job.id}`} key={job.id}
                    className={`border-b p-3 flex justify-between gap-2 w-full hover:bg-zinc-200/60 dark:hover:bg-zinc-800/40 cursor-pointer transition-all duration-200 group `}

                >
                    <div className="flex gap-2">
                        <img src={job.logo} loading="lazy" alt={job.company} className="w-14 h-14 rounded-lg" />
                        <div className="flex jusitfy-between w-full">
                            <div className="flex flex-col w-full">
                                <div className="font-medium group-hover:underline">{job.title}</div>
                                <div className="flex gap-1 items-center">
                                    <div className="text-xs text-zinc-700 dark:text-zinc-200">{job.company}</div>
                                    <div className="w-1 h-1 bg-zinc-500 rounded-full"></div>
                                    <div className="text-xs text-zinc-600 dark:text-zinc-400">{job.location}</div>
                                </div>
                                <div className="text-xs text-zinc-400">{job.salary}</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-end jusitfy-between gap-1.5">
                        <div className="flex gap-1">
                            <div className="p-1 hover:bg-zinc-700/60 rounded-md transition-all duration-200 w-fit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="stroke-zinc-500 dark:stroke-zinc-400">
                                    <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 17.98V9.709c0-3.634 0-5.45 1.172-6.58S8.229 2 12 2s5.657 0 6.828 1.129C20 4.257 20 6.074 20 9.708v8.273c0 2.306 0 3.459-.773 3.871c-1.497.8-4.304-1.867-5.637-2.67c-.773-.465-1.16-.698-1.59-.698s-.817.233-1.59.698c-1.333.803-4.14 3.47-5.637 2.67C4 21.44 4 20.287 4 17.981" />
                                </svg>
                            </div>
                            <div className="p-1 hover:bg-zinc-700/60 rounded-md transition-all duration-200 w-fit ">
                                <EllipsisVertical className="w-4 h-4 text-zinc-400" />
                            </div>
                        </div>
                        <div className="flex gap-1">
                            {job.applied ? (
                                <div className="py-1 px-2 border rounded-lg">
                                    <div className="text-xs text-blue-500 dark:text-emerald-500">Applied</div>
                                </div>
                            ) : job.viewed ? (
                                <div className="py-1 px-2 border rounded-lg">
                                    <div className="text-xs text-blue-500 dark:text-emerald-500">Applied</div>
                                </div>
                            ) : ""}

                            <div className="py-1 px-2 border rounded-lg">
                                <div className="text-xs text-blue-500 dark:text-blue-400">{job.skillmatch}/{job.allSkills} skills</div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
export default JobList;
