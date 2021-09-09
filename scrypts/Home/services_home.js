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

// onclick="bookService(${service.Service_Numb})"

showServices(service_url);
