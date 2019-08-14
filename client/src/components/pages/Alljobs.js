import React from "react";
import "./alljobs.css";

function AllJobs() {
    return (
        <section id="jobs" class="container">
            <h1>All Jobs</h1>

            {/* {{#each dbjobs}} */}
            <div class="job">
                {/* <h3>{{ title }}</h3>
                <p>{{ description }}</p> */}
                <ul>
                    {/* <li>Salary: {{ salary }}</li> */}
                    <li><a href="#" class="btn btn-reverse">Apply Now</a></li>
                </ul>
                <div class="tech">
                    {/* <small>Technologies: <span>{{ technologies }}</span></small> */}
                </div>
            </div>

            {/* {{ else}} */}
            {/* <p>No job avalaible in that field</p> */}

            {/* {{/ each}} */}

        </section>
    )
}

export default AllJobs;