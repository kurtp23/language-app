import axios from "axios";

const putUser = (id, name) => {
  return axios({
    method: "put",
    url: "/api/" + id,
    headers: {},
    data: {
      username: name,
    },
  });
};
export default putUser;
