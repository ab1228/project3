import React from 'react';
import { Link } from "react-router-dom";
import "./nav.css";


function Nav() {
    return (
        <div>
            <header className="inner">
                <h2><Link to="/">
                    TechJobFinder
                </Link></h2>

                <nav>
                    <ul>
                        <li>
                            <Link to="/">
                                Home
                        </Link>


                        </li>
                        <li>
                            <Link to="/jobs">
                                All Jobs
                        </Link>

                        </li>
                        <li>
                            <Link to="/jobs/add">
                                Add Jobs
                        </Link>

                        </li>
                    </ul>
                </nav>
            </header>
        </div>


    );
}

export default Nav;