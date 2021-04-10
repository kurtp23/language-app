const postUser = (data) => {
  fetch("/api/addUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.status === 200) {
      window.location.replace("/");
    } else {
    }
  });
};
export default postUser;
