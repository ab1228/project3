import React from "react";
import "./jobs.css";


function Jobs() {
    return (
        <div>

            <section id="jobs" class="container">
                <h1>All Jobs</h1>

                {/* {{#each dbjobs}} */}
                <div class="job">
                    {/* <h3>{{ title }}</h3>
                <p>{{ description }}</p> */}
                    <ul>
                        <li>Salary: </li>
                        <li><a href="#" class="btn btn-reverse">Apply Now</a></li>
                    </ul>
                    <div class="tech">
                        <small>Technologies: <span></span></small>
                    </div>
                </div>
                {/* 
                {{ else}}
                <p>No job avalaible in that field</p>

                {{/ each}} */}

            </section>
        </div>
    )
}

export default Jobs;