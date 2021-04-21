import axios from "axios";

const getUser = (id) => {
  return axios.get("/api/" + id, (req, res) => {
    // console.log("this is res", res);
    // console.log("this is req", req);
  });
};
export default getUser;
