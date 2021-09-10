// add vehicle

function addVehicleClient() {
  fetch(`https://qat-motors-api.herokuapp.com/vehicle`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Type: document.getElementById("client_type").value,
      Year_Modal: document.getElementById("client_year_modal").value,
      VIN_Numb: document.getElementById("client_vin_numb").value,
      Reg_Numb: document.getElementById("client_reg_numb").value,
      Username: document.getElementById("client_username").value,
    }),
  })
    .then((response) => response.json)
    .then((data) => {
      console.log(data);
      console.log("success");
      window.location.reload();
      alert("Vehicle Register Successful, Please Book a Service");
    });
}
