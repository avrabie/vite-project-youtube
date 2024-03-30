import './App.css'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import HomeCards from "./components/HomeCards.jsx";
import JobListings from "./components/JobListings.jsx";
import ViewAllJobs from "./components/ViewAllJobs.jsx";


const App = () => {
    // const myArr = ["Hello", "World", "Adrian", "Here", "Inna", "There"];
return (
    <>
        <Navbar />

        <Hero title='Transcend into a React Developer' subtitle='Some inspirational words go here'></Hero>

        <HomeCards></HomeCards>

        <JobListings></JobListings>

        <ViewAllJobs></ViewAllJobs>


    </>

)
}
export default App