import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import JobsPage from "./pages/JobsPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import './App.css'
import JobPage from "./pages/JobPage.jsx";


const App = () => {
    // const myArr = ["Hello", "World", "Adrian", "Here", "Inna", "There"];

    var router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout/>} >
                <Route index element={<HomePage/>} />
                <Route path="jobs" element={<JobsPage/>} />
                <Route path="job/:id" element={<JobPage/>} />
                <Route path={"*"} element={<NotFound/>} />

            </Route>


        ));

    return (
        <RouterProvider router={router} />
        // <>
        //     <Navbar/>
        //     <Hero title='Transcend into a React Developer' subtitle='Some inspirational words go here'></Hero>
        //     <HomeCards></HomeCards>
        //     <JobListings></JobListings>
        //     <ViewAllJobs></ViewAllJobs>
        // </>

    )
}
export default App