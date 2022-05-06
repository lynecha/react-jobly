import { Link } from "react-router-dom";
import React, {useContext, useState} from "react";
import UserContext from "./userContext";

/** prop: one single job object
 * presentational component that displays a single job card
 */
function JobCard({ job, handleApply, isDisabled }) {
    const { hasAppliedtoJob } = useContext(UserContext);
    const [apply,setApply] = useState(hasAppliedtoJob(job.id));
    async function handleSubmit(evt) {
        evt.preventDefault();
        console.log(evt.target)
        await handleApply(evt);
        setApply(true);
      }

    
    return (
        <div>
            <h3>{job.title}</h3>
            <h3>{job.companyName || ""}</h3>
            <p>salary: {job.salary || ""}</p>
            <p>equity: {job.equity || ""}</p>
                <button value={job.id} id={job.id} disabled={apply} onClick={handleSubmit} className="btn btn-danger">
                    {apply ? "Applied" : "Apply"}
                </button>
        </div >
    );
}

export default JobCard;
