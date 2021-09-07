const client_storage = window.localStorage;

fetch(
  `https://qat-motors-api.herokuapp.com/view-client/${client_storage.getItem(
    "username"
  )}`,
  {
    method: "GET",
    body: JSON.stringify(),
    headers: {
      "Content-type": "application/json",
    },
  }
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    console.log(data["data"][1]);
    document.querySelector(
      ".first-name"
    ).innerHTML = `First Name: ${data["data"][1]}`;
    document.querySelector(
      ".surname"
    ).innerHTML = `Surname: ${data["data"][2]}`;
    document.querySelector(
      ".address"
    ).innerHTML = `Address: ${data["data"][3]}`;
    document.querySelector(".email").innerHTML = `Email: ${data["data"][4]}`;
    document.querySelector(
      ".username"
    ).innerHTML = `Username: ${data["data"][5]}`;
  });
