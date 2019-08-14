import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/nav";
import AllJobs from "./components/pages/Alljobs";
import Searchbar from "./components/Searchbar"


const App = () => {
    return (
        <Router>
            <div>
                <Nav />
                <Route exact path="/jobs" component={AllJobs} />

                <Searchbar />

            </div>
        </Router>

    )
}
export default App;

