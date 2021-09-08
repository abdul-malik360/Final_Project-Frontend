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

    let client = data.data;

    console.log(client[0]);

    document.getElementById(
      "client_details"
    ).innerHTML = `First Name: ${client[0]}
    Surname: ${client[2]} ${client[1]}
    Cell: ${client[4]}
    Address: ${client[5]}
    Email: ${client[3]}
    Username: ${client[6]}`;
  });
