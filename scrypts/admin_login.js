// admin login

const adminLoginURL = "https://qat-motors-api.herokuapp.com/admin-login";
const admin_storage = window.localStorage;

function adminLogin() {
  let username = document.getElementById("admin_username").value;
  let password = document.getElementById("admin_password").value;

  console.log(username, password);

  fetch(adminLoginURL, {
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
        alert("Admin does not exist");
      } else {
        admin_storage.setItem("admin", JSON.stringify(json.data));
        window.location = "./admin.html";
      }
    });
}
