import type { Job } from "./types";

interface JobInfoProps {
    job: Job | null;
}

function JobInfo({ job }: JobInfoProps) {
    if (!job) return null;

    return (
        <div className="bg-zinc-900 border rounded-2xl p-4 w-full h-[900px] flex flex-col justify-between">
            <div className="flex flex-col gap-2">
                <div className="flex justify-between border-b pb-2">
                    <div className="flex gap-2 w-full">
                        <img src={job.logo} loading="lazy" alt={job.company} className="w-10 h-10 rounded-lg" />
                        <div className="flex jusitfy-between w-full">
                            <div className="flex flex-col w-full justify-center">
                                <div className="font-medium hover:underline text-sm cursor-pointer">{job.title}</div>
                                <div className="flex gap-1 items-center">
                                    <div className="text-xs text-zinc-400">(Remote)</div>
                                    <div className="w-1 h-1 bg-zinc-500 rounded-full"></div>
                                    <div className="text-zinc-400 text-xs">{job.posted}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <div className="font-medium pl-0.5 flex items-center gap-1 justify-between">Required Skills <span className="text-xs text-zinc-300">({job.skills.length})</span></div>
                        <div className="flex flex-wrap gap-1">
                            {job.skills.map((skill) => (
                                <div className="px-2 py-1 text-xs bg-blue-500/40 rounded-sm" key={skill}>{skill}</div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="font-medium ">About the job</div>
                        <div className="flex flex-col">
                            <div className="font-medium text-sm">What can we offer?</div>
                            <div className="text-xs text-zinc-300">{job.description}</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="font-medium text-sm">Role Overview</div>
                            <div className="text-xs text-zinc-300">{job.role}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-blue-500 p-2 flex justify-center items-center rounded-lg cursor-pointer hover:bg-blue-500/80 transition-all duration-200">Apply</div>
        </div>
    );
}
export default JobInfo;
