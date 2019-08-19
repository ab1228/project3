import React from 'react';
import Nav from "../nav"
import "./searchbar.css";



class Searchbar extends React.Component {
    state = {
        searchterm: ""
    }
    // searchJob = (event) => {

    render() {
        return (
            <div className="searchbar">
                <Nav />

                <section id="search" className="search-wrap">
                    <h1>Find your coding job today</h1>
                    <div action="/jobs/search" className="search-form">
                        <i className="fas fa-search"></i>
                        <input type="search" name="term" placeholder="Javascript, Java, Html, etc..." />
                        <input type="submit" value="Search" onClick={this.search} />
                    </div>
                </section>
            </div>


        );
    }
}




export default Searchbar;