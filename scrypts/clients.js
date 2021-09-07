// add client

function addClient() {
  fetch(`https://qat-motors-api.herokuapp.com/client`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Name: document.getElementById("name").value,
      Surname: document.getElementById("surname").value,
      Title: document.getElementById("title").value,
      Email: document.getElementById("email").value,
      Cell: document.getElementById("cell").value,
      Address: document.getElementById("address").value,
      Username: document.getElementById("username").value,
      Password: document.getElementById("password").value,
    }),
  })
    .then((response) => response.json)
    .then((data) => {
      console.log(data);
      console.log("success");
      window.location.reload();
    });
}

// show clients

let clients_url = "https://qat-motors-api.herokuapp.com/client";

let clients = [];

function showClients(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let clients = data.data;

      let show = document.querySelector(".show_clients");

      clients.forEach((client) => {
        console.log(client);
        show.innerHTML += ` 
        <div class="client_container">
        <h1 class="username">${client.Username} </h1>
        <p class="name">${client.Title} ${client.Name} ${client.Surname}</p>
        <p class="email" >${client.Email}</p>
        <p class="cell"> ${client.Cell}</p>
        <p class="address">${client.Address}</p>
        
        
        
        </div>`;
      });
    });
}

showClients(clients_url);

// edit client

function editClient() {
  let username = document.querySelector(`#edit_username`).value;
  let name = document.querySelector(`#edit_name`).value;
  let surname = document.querySelector(`#edit_surname`).value;
  let title = document.querySelector(`#edit_title`).value;
  let email = document.querySelector(`#edit_email`).value;
  let cell = document.querySelector(`#edit_cell`).value;
  let address = document.querySelector(`#edit_address`).value;
  let password = document.querySelector(`#edit_password`).value;

  console.log(username, name, surname, title, email, cell, address, password);

  if (
    (document.querySelector(`#edit_username`).value.length == 0,
    document.querySelector(`#edit_name`).value.length == 0,
    document.querySelector(`#edit_surname`).value.length == 0,
    document.querySelector(`#edit_title`).value.length == 0,
    document.querySelector(`#edit_email`).value.length == 0,
    document.querySelector(`#edit_cell`).value.length == 0,
    document.querySelector(`#edit_address`).value.length == 0,
    document.querySelector(`#edit_password`).value.length == 0)
  ) {
    alert("Please enter details to edit a client");
  } else {
    fetch(`https://qat-motors-api.herokuapp.com/client/${username}`, {
      method: "PUT",
      body: JSON.stringify({
        Name: name,
        Surname: surname,
        Title: title,
        Email: email,
        Cell: cell,
        Address: address,
        Password: password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      });
  }
}

// delete client

function deleteClient() {
  let username = document.querySelector("#delete_client").value;

  if (document.getElementById("delete_client").value.length == 0) {
    alert("Please enter a Username");
  } else {
    if (confirm("Are you sure you want to delete this client?")) {
      fetch(`https://qat-motors-api.herokuapp.com/client/${username}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          window.location.reload();
        });
    }
  }
}
