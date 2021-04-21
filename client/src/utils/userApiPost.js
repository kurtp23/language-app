import axios from 'axios';

const postUser = (data) => {
  return axios.post('/api/users', {
    username: data.displayName,
    email: data.email,
    fire_id: data.uid,
    userCreated: new Date(Date.now()),
  });
};
export default postUser;
