import axios from "axios";

const getUser = (id) => {
  return axios
    .get("/api/" + id)
    .then(function (response) {
      console.log("this is also user", response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
export default getUser;
