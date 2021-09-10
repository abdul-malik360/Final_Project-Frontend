// show vehicles

const client_vehicle_storage = window.localStorage;

let vehicles = [];

let vehicle_url = `https://qat-motors-api.herokuapp.com/view-client-vehicle/${client_vehicle_storage.getItem(
  "username"
)}`;

fetch(vehicle_url, {
  method: "GET",
  body: JSON.stringify(),
  headers: {
    "Content-type": "application/json",
  },
})
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

function showVehicle(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let vehicles = data.data;

      let show = document.querySelector(".show_vehicle");

      vehicles.forEach((vehicle) => {
        console.log(vehicle.Reg_Numb);
        show.innerHTML += ` 
          <option value="${vehicle.Reg_Numb}">${vehicle.Reg_Numb}</option>
          `;
      });
    });
}
showVehicle(vehicle_url);
