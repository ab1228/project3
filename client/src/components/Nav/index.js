import React from 'react';
import { Link } from "react-router-dom";
import "./nav.css";


function Nav() {
    return (

        <header class="inner">
            <h2><Link to="/">
                TechJobFinder
                </Link></h2>
            {/* <h2><a href="/">
                    TechJobFinder</a></h2> */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                        {/* <a href="/">Home</a> */}

                    </li>
                    <li>
                        <Link to="/jobs">
                            All Jobs
                        </Link>
                        {/* <a href="/jobs">All Jobs</a> */}
                    </li>
                    <li>
                        <Link to="/jobs/add">
                            Add Jobs
                        </Link>
                        {/* <a href="/jobs/add">Add Jobs</a> */}
                    </li>
                </ul>
            </nav>
        </header>


    );
}

export default Nav;