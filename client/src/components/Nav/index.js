import React from 'react';
import "./nav.css";


function Nav() {
    return (

        <header class="inner">
            <h2><a href="/">
                TechJobFinder</a></h2>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/jobs">All Jobs</a>
                    </li>
                    <li>
                        <a href="/jobs/add">Add Jobs</a>
                    </li>
                </ul>
            </nav>
        </header>

    );
}

export default Nav;