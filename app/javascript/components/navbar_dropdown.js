document.querySelector(".application-nav-mobile-icon").addEventListener("click", (event) => {
  event.preventDefault();
  console.log("1 works")
  let dropdownList = document.querySelector(".application-nav-dropdown");
  if (dropdownList.style.display === "none") {
    console.log("display block now")
    dropdownList.style.display = "block";
  } else {
    dropdownList.style.display = "none";
  }
});

console.log("hi");

