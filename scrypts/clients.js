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

// delete client 

function deleteClient() {
  let username = document.querySelector("#delete_client").value; 

  if(document.getElementById("delete_client").value.length == 0)
  {
      alert("Please enter a Username")
  }
  else {
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