import axios from "axios";

export default {
  // Gets all books
  getChallenges: function() {
    return axios.get("/api/challenges");
  },
  // Gets all flashcards
  getFlashcards: function() {
    return axios.get("/api/flashcards");
  },
};
