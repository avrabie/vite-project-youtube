import JobListings from "../components/JobListings.jsx";

const JobsPage = () => {
    return (
        <section className={"bg-blue-50 px-4 py-6"}>
            <JobListings isHome={true}/>
        </section>
    )
}
export default JobsPage;
