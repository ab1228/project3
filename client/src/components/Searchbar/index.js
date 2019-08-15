import React from 'react';
import Nav from "../nav"
import "./searchbar.css";



function Searchbar() {
    return (
        <div className="searchbar">
            <Nav />

            <section id="search" class="search-wrap">
                <h1>Find your coding job today</h1>
                <form action="/jobs/search" class="search-form">
                    <i class="fas fa-search"></i>
                    <input type="search" name="term" placeholder="Javascript, Java, Html, etc..." />
                    <input type="submit" value="Search" />
                </form>
            </section>
        </div>


    );
}

export default Searchbar;