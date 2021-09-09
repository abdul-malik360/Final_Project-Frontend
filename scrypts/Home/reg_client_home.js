// function to register clients
function addClientHome() {
  fetch(`https://qat-motors-api.herokuapp.com/client`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Name: document.getElementById("name").value,
      Surname: document.getElementById("surname").value,
      Title: document.getElementById("title").value,
      Email: document.getElementById("reg_email").value,
      Cell: document.getElementById("cell").value,
      Address: document.getElementById("address").value,
      Username: document.getElementById("reg_username").value,
      Password: document.getElementById("reg_password").value,
    }),
  })
    .then((response) => response.json)
    .then((data) => {
      console.log(data);
      console.log("success");
      window.location.reload();
      alert("Client Register Successful, Please Login");
    });
}
