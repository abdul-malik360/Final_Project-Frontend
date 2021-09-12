client = client_storage.getItem("username");

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
    clients = data.data;
    console.log(clients[2]);
  });

function getDefault() {
  document.querySelector(`#edit_name`).setAttribute("value", `${clients[0]}`);
  document
    .querySelector(`#edit_surname`)
    .setAttribute("value", `${clients[1]}`);
  document.querySelector(`#title_edit`).setAttribute("value", `${clients[2]}`);
  document.querySelector(`#edit_email`).setAttribute("value", `${clients[3]}`);
  document.querySelector(`#edit_cell`).setAttribute("value", `${clients[4]}`);
  document
    .querySelector(`#edit_address`)
    .setAttribute("value", `${clients[5]}`);
  document
    .querySelector(`#edit_password`)
    .setAttribute("value", `${clients[7]}`);
}
// edit client

function editClient() {
  let username = client_storage.getItem("username");
  let name = document.querySelector(`#edit_name`).value;
  let surname = document.querySelector(`#edit_surname`).value;
  let title = document.querySelector(`#edit_title`).value;
  let email = document.querySelector(`#edit_email`).value;
  let cell = document.querySelector(`#edit_cell`).value;
  let address = document.querySelector(`#edit_address`).value;
  let password = document.querySelector(`#edit_password`).value;

  console.log(username, name, surname, title, email, cell, address, password);

  console.log(client.Name);
  let proceed = confirm("are you sure you want to make these changes");
  if (proceed) {
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
        alert("Edit Profile Complete");
      });
  } else {
    alert("Edit Profile Cancelled");
    window.location.reload();
  }
}

// confirm("are you sure you want to make these changes");
