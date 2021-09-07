// client login

const clientLoginURL = "https://qat-motors-api.herokuapp.com/client-login";
const storage = window.localStorage;

function clientLogin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  console.log(username, password);

  fetch(clientLoginURL, {
    method: "PATCH",
    body: JSON.stringify({
      Username: username,
      Password: password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((result) => result.json())
    .then((json) => {
      console.log(json.data);
      if (json.data == 0) {
        alert("Client does not exist");
      } else {
        storage.setItem("clients", JSON.stringify(json.data));
        window.location = "./client.html";
      }
    });
}
