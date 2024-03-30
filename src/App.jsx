import './App.css'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import HomeCards from "./components/HomeCards.jsx";
import JobListings from "./components/JobListings.jsx";


const App = () => {
    // const myArr = ["Hello", "World", "Adrian", "Here", "Inna", "There"];
return (
    <>
        <Navbar />

        <Hero title='Transcend into a React Developer' subtitle='Some inspirational words go here'></Hero>

        <HomeCards></HomeCards>

        <JobListings></JobListings>


        <section className="m-auto max-w-lg my-10 px-6">
            <a
                href="jobs.html"
                className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
            >View All Jobs</a
            >
        </section>
    </>

)
}
export default App