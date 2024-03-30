import jobs from '../assets/jobs.json';
import JobListing from "./JobListing.jsx";

// eslint-disable-next-line react/prop-types
const JobListings = ({isHome = false}) => {

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