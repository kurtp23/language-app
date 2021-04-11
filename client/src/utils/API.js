import axios from "axios";

export default {
  // Gets all books
  getChallenges: function() {
    return axios.get("/api/challenges");
  },
  getChallengeData: function(query) {
    const queryURL = "api/challenge/" + query
    return axios.get(queryURL)
  },
  // Gets all flashcards
  getFlashcards: function() {
    return axios.get("/api/flashcards");
  },
};
