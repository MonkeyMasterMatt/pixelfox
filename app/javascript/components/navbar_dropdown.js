document.querySelector(".application-nav-mobile-icon").addEventListener("click", (event) => {
  event.preventDefault();
  let dropdownList = document.querySelector(".application-nav-dropdown");
  if (dropdownList.style.display === "none") {
    dropdownList.style.display = "block";
  } else {
    dropdownList.style.display = "none";
  }

});



