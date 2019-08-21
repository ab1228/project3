import React from "react";
import API from "../../utils/API";
import Nav from "../nav";
import Jobs from "../jobs";
import Card from './Card';
import Job from './Job';
import { List } from './List';

class AllJobs extends React.Component {
    state = {
        jobs: [],

    }

    componentDidMount = function () {
        // this.getJobList();
    }

    getJobList = () => {
        API.getJobs().then((res) => {
            console.log(res.data)
            this.setState({ jobs: res.data })
        }).catch((err) => { console.log(err) })

    }

    // handleBookSave = id => {
    //     const book = this.state.books.find(book => book.id === id);

    //     API.saveBook({
    //         googleId: book.id,
    //         title: book.volumeInfo.title,
    //         subtitle: book.volumeInfo.subtitle,
    //         link: book.volumeInfo.infoLink,
    //         authors: book.volumeInfo.authors,
    //         description: book.volumeInfo.description,
    //         image: book.volumeInfo.imageLinks.thumbnail
    //     }).then(() => this.getBooks());
    // };

    render() {
        return (
            <div className="jobs">
                <Nav />
                <Jobs />
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
                                    Button={() => (
                                        <button
                                        // onClick={() => this.handleBookSave(job.id)}
                                        // className="btn btn-primary ml-2"
                                        >
                                            Save
                                        </button>
                                    )}
                                />
                            )}
                        </List>
                    ) : (
                            <h2 className="text-center">No Jobs Available</h2>
                        )}
                </Card>
            </div>
        )
    }


}


export default AllJobs;