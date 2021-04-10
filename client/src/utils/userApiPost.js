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

  //   fetch("/api/addUser", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username: data.displayName,
  //       email: data.email,
  //       fire_id: data.uid,
  //       userCreated: new Date(Date.now()),
  //     }),
  //   }).then((response) => {
  //     if (response.status === 200) {
  //       window.location.replace("/");
  //     } else {
  //     }
  //   });
};
export default postUser;
