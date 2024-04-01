import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import JobsPage from "./pages/JobsPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import './App.css'
import JobPage, {jobLoader} from "./pages/JobPage.jsx";
import AddJobPage from "./pages/AddJobPage.jsx";


const App = () => {
    // const myArr = ["Hello", "World", "Adrian", "Here", "Inna", "There"];

    const addJob = async (job) => {
        try {
            const response = await fetch("/api/jobs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(job),
            });
            if (response.ok) {
                console.log("Job added successfully");
            } else {
                alert("Failed to add job");
            }

        } catch (error) {
            console.error("Error adding job", error);
        }
    }

    const deleteJob = async (id) => {
        try {
            const response = await fetch(`/api/jobs/${id}`, {
                method: "DELETE",
            });
            return response;

        } catch (error) {
            console.error("Error deleting job", error);
        }
    }

    var router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout/>} >
                <Route index element={<HomePage/>} />
                <Route path="jobs" element={<JobsPage/>} />
                <Route path="job/:id" element={<JobPage deleteMe={deleteJob}/>} loader={jobLoader} />
                <Route path={"add-job"} element={<AddJobPage addJobSubmit={addJob} />} />
                <Route path={"*"} element={<NotFound/>} />

            </Route>


        ));

    return (
        <RouterProvider router={router} />
    )
}
export default App