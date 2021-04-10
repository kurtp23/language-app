const postUser = (data) => {
  fetch("/api/addUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        username: data.displayName ,
        email: data.email,




    }),
  }).then((response) => {
    if (response.status === 200) {
      window.location.replace("/");
    } else {
    }
  });
};
export default postUser;
