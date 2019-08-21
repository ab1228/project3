import React from 'react';
import Nav from "../nav"
import "./searchbar.css";
import API from "../../utils/API";
import Card from '../pages/Card';
import Job from '../pages/Job';
import { List } from '../pages/List';



class Searchbar extends React.Component {
    state = {
        jobs: [],
        searchterm: ""
    }
    searchJob = (event) => {
        let value = event.target.value.trim();
        this.setState({
            searchterm: value
        });
        API.getJobsByQuery(this.state.searchterm)
            .then(res => {
                console.log(res)
                this.setState({
                    jobs: res.data.data,
                    search_term: ""
                })
            })

    }

    render() {
        return (
            <div className="searchbar">
                <Nav />
                <div>{this.state.searchterm}</div>
                <section id="search" className="search-wrap">
                    <h1>Find your coding job today</h1>
                    <div action="/jobs/search" className="search-form">
                        <i className="fas fa-search"></i>
                        <input type="search" name="term" placeholder="Javascript, Java, Html, etc..." />
                        <input type="submit" value="search" onClick={this.searchJob} />
                    </div>
                    <Card title="Results">
                        {this.state.jobs.length ? (
                            <List>
                                {this.state.jobs.map(job =>
                                    <Job
                                        key={job.id}
                                        title={job.title}
                                        technologies={job.technologies}
                                        contactEmail={job.contactEmail}
                                        description={job.description}

                                    />
                                )}
                            </List>
                        ) : (
                                <h2 className="text-center">No Jobs Available</h2>
                            )}
                    </Card>
                </section>
            </div>


        );
    }



}




export default Searchbar;