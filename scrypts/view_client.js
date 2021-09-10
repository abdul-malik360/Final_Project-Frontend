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
    ).innerHTML = `<div class="client_box">
    <p class="fname">First Name: ${client[0]}</p>
    <p class="surname">Surname: ${client[2]} ${client[1]}</p>
    <p class="cell">Cell: ${client[4]}</p>
    <p class="address">Address: ${client[5]}</p>
    <p class="email">Email: ${client[3]}</p>
    <p class="username"> Username: ${client[6]}</p>
  </div>`;
  });
