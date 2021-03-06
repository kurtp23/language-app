import axios from 'axios';

export default {
  // Gets all books
  getChallenges: function() {
    return axios.get('/api/worddata');
  },
  getChallengeData: function(query) {
    const queryURL = 'api/worddata/' + query;
    return axios.get(queryURL);
  },
  // Gets all flashcards
  getFlashcards: function () {
    return axios.get('/api/flashcards');
  },
  getStats: function () {
    return axios.get('/api/users/stats');
  },
  putStat: function(userid, newStat) {
    const url = '/api/users/stats/' + userid;
    return axios({
      method: 'put',
      url: url,
      data: newStat,
    });
  },
};