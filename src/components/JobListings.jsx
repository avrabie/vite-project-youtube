
import JobListing from "./JobListing.jsx";
import {useEffect, useState} from "react";

// eslint-disable-next-line react/prop-types
const JobListings = ({isHome = false}) => {

    const [jobs, setJobs] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch("http://localhost:8000/jobs");
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                console.error("Error fetching jobs", error);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    let jobsForDisplay = jobs;
    if (!isHome) {
        jobsForDisplay = jobs.slice(0, 3);
    }

    return (
        <>
            {/*browse jobs*/}
            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        {isHome ? "Browse Jobs" : "Latest Jobs"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {
                            jobsForDisplay.map((job) => (
                                // eslint-disable-next-line react/jsx-key
                                <JobListing job={job} key={job.id}/>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default JobListings;