import React from "react";
import Nav from "../nav";
import "./addjobs.css";




function AddJobs() {
    return (
        <div className="addjobs">
            <Nav />

            <section id="add" className="container">
                <div className="form-wrap">
                    <h1>Add A Job</h1>
                    <p>Your contact email will be shared with registered users to apply to your job</p>
                    {/* {{#each errors}} */}
                    <div>
                        {/* <p>{{ text }}</p> */}
                    </div>
                    {/* {{/ each}} */}

                    <div className="input-group">
                        <label htmlFor="title">Job Title</label>
                        <input type="text" name="title" id="title" className="input-box"
                        // placeholder="eg. Small Wordpress website, React developer" maxlength="100" value={{ title }} /> </div>
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="technologies">Technologies Needed</label>
                        <input type="text" name="technologies" id="technologies" className="input-box"
                        // placeholder="eg. javascript, react, PHP" maxlength="100" value={{ technologies }} />
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="budget">Salary/Pay</label>
                        <input type="number" name="salary" id="salary" className="input-box" placeholder="eg. 500, 5000, 10000"
                        // value={{ salary }} />
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="description">Job Description</label>
                        <textarea name="description" id="description" className="input-box"
                            placeholder="Describe the details of the Job" rows="10">
                        </textarea>
                    </div>
                    <div className="input-group">
                        <label htmlFor="budget">Contact Email</label>
                        <input type="email" name="contactEmail" id="contactEmail" className="input-box" placeholder="Enter an email"
                        // value={{ contactEmail }} />
                        />

                    </div>
                    <input type="submit" value="Add Job" className="btn btn-reverse" />

                </div>
            </section>
        </div >
    )

}

export default AddJobs;