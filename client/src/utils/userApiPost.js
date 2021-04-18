import axios from "axios";

const postUser = (data) => {
  return axios
    .post("/api/addUser", {
      username: data.displayName,
      email: data.email,
      fire_id: data.uid,
      userCreated: new Date(Date.now()),
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
export default postUser;
