import type { Job } from "./types";

interface JobListProps {
    jobs: Job[];
    onSelect: (job: Job) => void;
    selectedJob: Job | null;
}

function JobList({ jobs, onSelect, selectedJob }: JobListProps) {
    return (
        <div className="bg-zinc-900 border rounded-2xl h-[900px] flex flex-col overflow-y-scroll">
            {jobs.map((job) => (
                <div key={job.id}
                     className={`border-b p-3 flex gap-2 w-full hover:bg-zinc-800/40 rounded-t-2xl cursor-pointer transition-all duration-200 group ${selectedJob?.id === job.id ? 'bg-zinc-800/20' : ''}`}
                     onClick={() => onSelect(job)}
                >
                    <img src={job.logo} loading="lazy" alt={job.company} className="w-12 h-12 rounded-lg" />
                    <div className="flex jusitfy-between w-full">
                        <div className="flex flex-col w-full">
                            <div className="font-medium group-hover:underline">{job.title}</div>
                            <div className="flex gap-1 items-center">
                                <div className="text-xs text-zinc-200">{job.company}</div>
                                <div className="w-1 h-1 bg-zinc-500 rounded-full"></div>
                                <div className="text-xs text-zinc-400">{job.location}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default JobList;
