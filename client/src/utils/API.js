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
<<<<<<< HEAD
=======
  // Gets all flashcards
  getFlashcards: function () {
    return axios.get('/api/flashcards');
  },
>>>>>>> master
  getStats: function () {
    return axios.get('/api/stats');
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
