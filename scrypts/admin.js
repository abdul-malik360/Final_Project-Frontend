let admins_url = "https://qat-motors-api.herokuapp.com/admin";

let admins = [];

function showAdmins(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let admins = data.data;

      let show = document.querySelector(".show_admins");

      admins.forEach((admin) => {
        console.log(admin);
        show.innerHTML += ` 
        <div class="admin_container">
        <p class="email" >${admin.Fullname}</p>
        <p class="cell"> ${admin.Username}</p>  
        
        </div>`;
      });
    });
}

showAdmins(admins_url);