// add service 

function addService() {
  fetch(`https://qat-motors-api.herokuapp.com/service`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Type: document.getElementById("type").value,
      Description: document.getElementById("description").value,
      Duration: document.getElementById("duration").value,
      Price: document.getElementById("price").value,
    }),
  })
    .then((response) => response.json)
    .then((data) => {
      console.log(data);
      console.log("success");
      window.location.reload();
    });
}

// show services

let service_url = "https://qat-motors-api.herokuapp.com/service";

let services = [];

function showServices(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let services = data.data;

      let show = document.querySelector(".show_services");

      services.forEach((service) => {
        console.log(service);
        show.innerHTML += ` 
        <div class="service_container">
        <h1 class="name"> <span class="serv_numb">${service.Service_Numb}.</span> ${service.Type}</h1>
        <p class="description" >${service.Description}</p>
        <h2 class="duration"> ${service.Duration}</h2>
        <h3 class="price">R ${service.Price}</h3>        
        </div>`;
      });
    });
}

showServices(service_url);

// edit service

function editService() {
  
  // get data from form
  let type = document.querySelector(`#type`).value;
  let description = document.querySelector(`#description`).value;
  let duration = document.querySelector(`#duration`).value;
  let price = document.querySelector(`#price`).value;

  console.log(type, description, duration, price);

  // send data to api
  if (
    (document.querySelector(`#type`).value.length == 0,
    document.querySelector(`#description`).value.length == 0,
    document.querySelector(`#duration`).value.length == 0,
    document.querySelector(`#price`).value.length == 0)
  ) {
    alert("input is empty");
  } else {
    fetch(
      `https://qat-motors-api.herokuapp.com/service/${type}`,
      {
        method: "PUT",
        body: JSON.stringify({
          
          description: description,
          duration: duration,
          price: price,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
}

// delete services 

function deleteService() {
  let service_type = document.querySelector("#delete_service").value; 

  if(document.getElementById("delete_service").value.length == 0)
  {
      alert("Please enter a service name")
  }
  else {
    if (confirm("Are you sure you want to delete this Service?")) {
      fetch(`https://qat-motors-api.herokuapp.com/service/${service_type}`, {
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

