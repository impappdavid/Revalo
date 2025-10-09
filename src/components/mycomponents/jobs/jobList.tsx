import { Link } from "react-router-dom";
import type { Job } from "./types";
import { Settings } from "lucide-react";

interface JobListProps {
    jobs: Job[];
    onSelect: (job: Job) => void;
    selectedJob: Job | null;
}

function JobList({ jobs, onSelect, selectedJob }: JobListProps) {
    return (
        <div className="bg-white dark:bg-zinc-900 border h-[900px] flex flex-col rounded-2xl overflow-y-scroll">
            <div className="p-3 text-xl font-medium flex justify-between items-center">
                <div className="flex gap-1 items-center">
                    <div className="">Jobs</div>
                    <div className="text-xs text-zinc-600 dark:text-zinc-400">(36 results)</div>
                </div>
                <div className="p-1.5 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-200/80 dark:hover:bg-zinc-800 rounded-sm cursor-pointer transition-all duration-200">
                    <Settings className="w-4 h-4 "/>
                </div>
            </div>
            {jobs.map((job) => (
                <Link to={`/job/${job.id}`} key={job.id}
                    className={`border-b p-3 flex gap-2 w-full hover:bg-zinc-200/60 dark:hover:bg-zinc-800/40 cursor-pointer transition-all duration-200 group ${selectedJob?.id === job.id ? 'bg-zinc-200/60 dark:bg-zinc-700/20' : ''}`}
                    onClick={() => onSelect(job)}
                >
                    <img src={job.logo} loading="lazy" alt={job.company} className="w-12 h-12 rounded-lg" />
                    <div className="flex jusitfy-between w-full">
                        <div className="flex flex-col w-full">
                            <div className="font-medium group-hover:underline">{job.title}</div>
                            <div className="flex gap-1 items-center">
                                <div className="text-xs text-zinc-700 dark:text-zinc-200">{job.company}</div>
                                <div className="w-1 h-1 bg-zinc-500 rounded-full"></div>
                                <div className="text-xs text-zinc-600 dark:text-zinc-400">{job.location}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
export default JobList;
