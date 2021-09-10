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
    <p class="fname client_details">First Name: ${client[0]}</p>
    <p class="surname client_details">Surname: ${client[2]} ${client[1]}</p>
    <p class="cell client_details">Cell: ${client[4]}</p>
    <p class="address client_details">Address: ${client[5]}</p>
    <p class="email client_details">Email: ${client[3]}</p>
    <p class="username client_details"> Username: ${client[6]}</p>
  </div>`;
  });
