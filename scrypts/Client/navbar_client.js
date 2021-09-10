// when you click on the drop div, the list appears
function toggleDropBox(dropID) {
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

function toggleModal(modalID) {
  document.getElementById(modalID).classList.toggle("active");
}
