const vehicles_storage = window.localStorage;
let appointments = [];
let appointment_url = `https://qat-motors-api.herokuapp.com/view-client-appointment/${vehicle.Reg_Numb}`;

fetch(appointment_url, {
  method: "GET",
  body: JSON.stringify(),
  headers: {
    "Content-type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    let appointments = data.data;

    show = document.getElementById("client_appointment_details");

    console.log(appointments);

    appointments.forEach((appointment) => {
      console.log(appointment);
      show.innerHTML += `<div class="vehicle_box">
        <p class="type">Type: ${appointment.Type}</p>
        <p class="vin_numb">VIN Number: ${appointment.Reg_Numb}</p>
        <p class="year_model">Year Model: ${appointment.Day}</p>
        <p class="reg_numb">Registration Number: ${appointment.Time}</p>
      </div>
        `;
    });
  });
