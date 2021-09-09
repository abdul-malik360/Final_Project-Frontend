// client login

const clientLoginURL = "https://qat-motors-api.herokuapp.com/client-login";
const client_storage = window.localStorage;

function clientLogin() {
  let username = document.getElementById("log_client_username").value;
  let password = document.getElementById("log_client_password").value;

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
        client_storage.setItem(
          "username",
          document.getElementById("log_client_username").value
        );
        window.location = "./client.html";
      }
    });
}
