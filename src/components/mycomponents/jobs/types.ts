// types.ts
export interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
    logo: string;
    skills: string[];
    description: string;
    role: string;
    posted: string;
    salary: string;
    applied: boolean;
    viewed: boolean;
    skillmatch: string;
    allSkills: number;
}
