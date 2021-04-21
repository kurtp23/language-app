import axios from 'axios';

export default {
  putLanguage: function (id, lang) {
    return axios({
      method: 'put',
      url: '/api/users/lang/' + id,
      headers: {},
      data: {
        language: lang,
      },
    });
  },
  putUser: function (id, name) {
    return axios({
      method: 'put',
      url: '/api/users/' + id,
      headers: {},
      data: {
        username: name,
      },
    });
  },
  getUser: function (id) {
    return axios.get('/api/users/' + id, (req, res) => {
      // console.log('this is res', res);
      // console.log('this is req', req);
    });
  },
  postUser: function (data) {
    return axios.post('/api/users', {
      username: data.displayName,
      email: data.email,
      fire_id: data.uid,
      userCreated: new Date(Date.now()),
    });
  },
};
