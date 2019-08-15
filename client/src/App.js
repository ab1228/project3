import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AllJobs from "./components/pages/Alljobs";
import AddJobs from "./components/pages/Addjobs";
import Searchbar from "./components/Searchbar"
import Wrapper from "./components/Wrapper";


const App = () => {
    return (



        <Router>

            <Wrapper>

                <Route exact path="/" component={Searchbar} />
                <Route exact path="/jobs" component={AllJobs} />
                <Route exact path="/jobs/add" component={AddJobs} />

            </Wrapper>
        </Router>





    )
}
export default App;

