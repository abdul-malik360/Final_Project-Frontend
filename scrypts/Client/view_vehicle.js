const client_vehicle_storage = window.localStorage;

let vehicles = [];

fetch(
  `https://qat-motors-api.herokuapp.com/view-client-vehicle/${client_vehicle_storage.getItem(
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

    let vehicles = data.data;

    show = document.getElementById("client_vehicle_details");

    console.log(vehicles);

    vehicles.forEach((vehicle) => {
      console.log(vehicle);
      show.innerHTML += `<div class="vehicle_box">
      <p class="type">Type: ${vehicle.Type}</p>
      <p class="vin_numb">VIN Number: ${vehicle.VIN_Numb}</p>
      <p class="year_model">Year Model: ${vehicle.Year_Modal}</p>
      <p class="reg_numb">Registration Number: ${vehicle.Reg_Numb}</p>
    </div>
      `;
    });
  });
