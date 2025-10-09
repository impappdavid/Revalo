import { useState } from "react";
import Sidebar from "../sidebar";
import type { Job } from "./types";
import JobList from "./jobList";
import JobFilter from "./jobFilter";

const jobs: Job[] = [
    {
        id: 1,
        title: "Software Engineer",
        company: "Amazon",
        location: "United States (Remote)",
        logo: "https://images01.military.com/sites/default/files/styles/full/public/2018-04/amazon-logo-1800.jpg",
        skills: ["React", "TypeScript", "AWS", "C#", "MSQL", "Docker"],
        description: "Lorem Ipsum is simply dummy text of the printing...",
        role: "Lorem Ipsum is simply dummy text of the printing...",
        posted: "5h ago",
    },
    {
        id: 2,
        title: "Data Engineer",
        company: "Microsoft",
        location: "United States (Remote)",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
        skills: ["SQL", "Azure", "Python"],
        description: "Sample description for Data Engineer...",
        role: "Role overview for Data Engineer...",
        posted: "10h ago",
    },
];

function JobsLayout() {
    const [selectedJob, setSelectedJob] = useState<Job | null>(jobs[0] || null);

    return (
        <div className="w-full flex justify-center dark:bg-zinc-950 bg-zinc-100 h-full">
            <div className="w-full max-w-6xl flex p-2 gap-4">
                <Sidebar />
                <div className="w-full hidden sm:flex max-w-40"></div>
                <div className="flex flex-col gap-4 w-full">
                    <JobList jobs={jobs} onSelect={setSelectedJob} selectedJob={selectedJob}/>
                </div>
                <div className="w-full lg:max-w-76 hidden lg:flex items-center gap-2 flex-col">
                    <JobFilter />
                </div>
            </div>
        </div>
    );
}
export default JobsLayout;
