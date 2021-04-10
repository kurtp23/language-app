import axios from "axios";

export default {
  // Gets all books
  getChallenges: function() {
    return axios.get("/api/challenges");
  }
};
