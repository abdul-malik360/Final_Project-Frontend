// when you click on My Account, register or login appears
function regLogDropBox(dropID) {
  document.getElementById(dropID).classList.toggle("show-drop");
}

// when you click anywhere else on the screen, the list closes
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show-drop")) {
        openDropdown.classList.remove("show-drop");
      }
    }
  }
};

// when you click on register or login, this modal apears
function regLogModal(modalID) {
  document.getElementById(modalID).classList.toggle("active");
}

function servicefirstLogin() {
  alert("Login/Register to book a Service");
}
