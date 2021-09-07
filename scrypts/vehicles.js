// add vehicle

function addVehicle() {
  fetch(`https://qat-motors-api.herokuapp.com/vehicle`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Type: document.getElementById("type").value,
      Year_Modal: document.getElementById("year_modal").value,
      VIN_Numb: document.getElementById("vin_numb").value,
      Reg_Numb: document.getElementById("reg_numb").value,
      Username: document.getElementById("username").value,
    }),
  })
    .then((response) => response.json)
    .then((data) => {
      console.log(data);
      console.log("success");
    });
}

// show vehicles

let vehicles_url = "https://qat-motors-api.herokuapp.com/vehicle";

let vehicles = [];

function showVehicles(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let vehicles = data.data;

      let show = document.querySelector(".show_vehicles");

      vehicles.forEach((vehicle) => {
        console.log(vehicle);
        show.innerHTML += ` 
        <div class="vehicle_container">
        <h1 class="username">${vehicle.Username} </h1>
        <p class="type">${vehicle.Type} ${vehicle.Year_Modal}</p>
        <p class="reg_numb"> ${vehicle.Reg_Numb}</p>
        <p class="vin_numb" >${vehicle.VIN_Numb}</p>
                                 
        </div>`;
      });
    });
}

showVehicles(vehicles_url);
