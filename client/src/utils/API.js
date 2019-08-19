import axios from "axios";

export default {
    // Gets books from the Google API
    getJobs: function () {
        return axios.get("/");
    },
    getBookByQuery: function (q) {
        return axios.get("/search", { params: { q: "title:" + q } });
    },
    // Saves an book to the database
    postJobs: function (jobInfo) {
        return axios.post("/add", jobInfo);
    }
};