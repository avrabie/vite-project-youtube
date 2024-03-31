import {useEffect, useState} from "react";
import MyPacmanLoader from "../components/MyPacmanLoader.jsx";
import {useParams} from "react-router-dom";

const JobPage = () => {
    const id = useParams().id;

    const [job, setJob] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJob = async() => {
            try {
                await fetch(`/api/jobs/${id}`)
                    .then(response => response.json())
                    .then(data => {
                        setJob(data);
                    });
            } catch (error) {
                console.error("Error fetching job", error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchJob();
    }, []);
    return (
        <div>
            <h1>Job Page</h1>
            {
                loading ? (<MyPacmanLoader/>) :
                    <div>
                        <h2>{job.title}</h2>
                        <p>{job.description}</p>
                    </div>
            }
        </div>
    );
}
export default JobPage;