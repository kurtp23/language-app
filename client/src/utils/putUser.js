import axios from "axios";

const putUser = (id) => {
  return axios.put("/api/" + id, (req, res) => {
    console.log("this is res", res);
    console.log("this is req", req);
  });
};
export default putUser;
