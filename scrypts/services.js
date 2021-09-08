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
        <button onclick="toggleModal('book-appointments-modal'); firstLogin('reg-client-modal');" >Book Appointment</button> 
            
        </div>`;
      });
    });
}

// onclick="bookService(${service.Service_Numb})"

showServices(service_url);

// show type of service

function showServiceType(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let services = data.data;

      let show = document.querySelector(".show_service_type");

      services.forEach((service) => {
        console.log(service.Type);
        show.innerHTML += ` 
        <option value="${service.Type}">${service.Type}</option>
        `;
      });
    });
}

showServiceType(service_url);

// edit service

function editService() {
  let type = document.querySelector(`#edit_type`).value;
  let description = document.querySelector(`#edit_description`).value;
  let duration = document.querySelector(`#edit_duration`).value;
  let price = document.querySelector(`#edit_price`).value;

  console.log(type, description, duration, price);

  if (
    (document.querySelector(`#edit_type`).value.length == 0,
    document.querySelector(`#edit_description`).value.length == 0,
    document.querySelector(`#edit_duration`).value.length == 0,
    document.querySelector(`#edit_price`).value.length == 0)
  ) {
    alert("Please enter details to edit a service");
  } else {
    fetch(`https://qat-motors-api.herokuapp.com/service/${type}`, {
      method: "PUT",
      body: JSON.stringify({
        Description: description,
        Duration: duration,
        Price: price,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      });
  }
}

// delete services

function deleteService() {
  let service_type = document.querySelector("#delete_service").value;

  if (document.getElementById("delete_service").value.length == 0) {
    alert("Please enter a service name");
  } else {
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

// book service
// const booking_storage = window.localStorage;

// function bookService(id) {
//   if (booking_storage.getItem("clients")) {
//     let service = services.find((item) => {
//       return item.Service_Numb == id;
//     });
//     console.log(service);
//     if (booking_storage["services"]) {
//       services = JSON.parse(booking_storage.getItem("services"));
//     }
//     services.push(service);
//     console.log(services);
//     booking_storage.setItem("services", JSON.stringify(services));
//     console.log(booking_storage.getItem("services"));

//     alert("Added services");
//     // console.log("Here is your items:", cart);
//     // renderCart(cart);
//   } else {
//     alert("Login before booking");
//   }
// }
function firstLogin(modalID) {
  document.getElementById(modalID).classList.toggle("active");
}
