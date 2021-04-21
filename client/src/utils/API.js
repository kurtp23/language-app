import axios from "axios";

export default {
  // Gets all books
  getChallenges: function () {
    return axios.get("/api/challenges");
  },
  getChallengeData: function (query) {
    const queryURL = "api/challenges/" + query;
    return axios.get(queryURL);
  },
  // Gets all flashcards
  getFlashcards: function () {
    return axios.get("/api/flashcards");
  },
  getStats: function () {
    return axios.get("/api/stats");
  },
  putStat: function(userid, newStat) {
    const url = "/api/users/" + userid

    return axios({
      method: 'put',
      url: url,
      data: newStat,
    });
  },
};
