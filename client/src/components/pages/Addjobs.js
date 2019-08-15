import React from "react";
import Nav from "../nav";
import "./addjobs.css";



function AddJobs() {
    return (
        <div className="addjobs">
            <Nav />

            <section id="add" class="container">
                <div class="form-wrap">
                    <h1>Add A Job</h1>
                    <p>Your contact email will be shared with registered users to apply to your job</p>
                    {/* {{#each errors}} */}
                    <div>
                        {/* <p>{{ text }}</p> */}
                    </div>
                    {/* {{/ each}} */}
                    <form action="/jobs/add" method="POST">
                        <div class="input-group">
                            <label for="title">Job Title</label>
                            <input type="text" name="title" id="title" class="input-box"
                            // placeholder="eg. Small Wordpress website, React developer" maxlength="100" value={{ title }} /> </div>
                            />
                        </div>
                        <div class="input-group">
                            <label for="technologies">Technologies Needed</label>
                            <input type="text" name="technologies" id="technologies" class="input-box"
                            // placeholder="eg. javascript, react, PHP" maxlength="100" value={{ technologies }} />
                            />
                        </div>
                        <div class="input-group">
                            <label for="budget">Salary/Pay</label>
                            <input type="number" name="salary" id="salary" class="input-box" placeholder="eg. 500, 5000, 10000"
                            // value={{ salary }} />
                            />
                        </div>
                        <div className="input-group">
                            <label for="description">Job Description</label>
                            <textarea name="description" id="description" class="input-box"
                                placeholder="Describe the details of the Job" rows="10">
                            </textarea>
                        </div>
                        <div class="input-group">
                            <label for="budget">Contact Email</label>
                            <input type="email" name="contactEmail" id="contactEmail" class="input-box" placeholder="Enter an email"
                            // value={{ contactEmail }} />
                            />

                        </div>
                        <input type="submit" value="Add Job" class="btn btn-reverse" />
                    </form>
                </div>
            </section>
        </div>
    )

}

export default AddJobs;