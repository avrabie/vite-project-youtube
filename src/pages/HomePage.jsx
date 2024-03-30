import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import JobListings from "../components/JobListings.jsx";
import ViewAllJobs from "../components/ViewAllJobs.jsx";
import HomeCards from "../components/HomeCards.jsx";

const HomePage = () => {
    return (
        <>

            <Hero title='Transcend into a React Developer' subtitle='Some inspirational words go here'></Hero>
            <HomeCards></HomeCards>
            <JobListings></JobListings>
            <ViewAllJobs></ViewAllJobs>
        </>

    );
}
export default HomePage;