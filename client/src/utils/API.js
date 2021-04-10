import axios from "axios";

export default {
  // Gets all books
  getChallenges: function() {
    return axios.get("/api/challenges");
  },
  getChallengeData: function(query) {
    const queryURL = "api/challenge/" + query
    console.log(queryURL)
    return axios.get(queryURL)
  }
};
