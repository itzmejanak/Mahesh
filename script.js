function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleDarkMode() {
  document.body.style.backgroundColor = "#121212";
  document.body.style.color = "white";

  var navbarUl = document.querySelector('nav ul');
  let licon = document.querySelectorAll("article img");
  licon.forEach((dets) =>{
    dets.src = "./assets/light icon/checkmark.png";
  })
  let ficon = document.querySelector(".details-container img");
  ficon.src = "./assets/light icon/experience.png"
  let llicon = document.querySelector(".details-container #second-icon");
  llicon.src = "./assets/light icon/education.png"

  navbarUl.style.backgroundColor = "#121212";
  navbarUl.style.color = "white";
  var anchors = document.querySelectorAll('a');
  let arrow = document.querySelectorAll(".icon");
  arrow[13].src = "./assets/light icon/arrow.png";
  arrow[4].src = "./assets/light icon/arrow.png";
  arrow[14].src = "./assets/light icon/arrow.png";
  arrow[15].src = "./assets/light icon/email.png";
  
  anchors.forEach(function(anchor) {
    anchor.style.color = "white";
    anchor.style.textDecoration = "none";
  });

  var navbarLi = document.querySelectorAll('nav li');

  navbarLi.forEach(function(li) {
    li.style.color = "white";
  });

  var divs = document.querySelectorAll('div');
  var buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(function(button) {
    button.style.color = "white";
    button.style.borderColor = "white";
  });

  divs.forEach(function(div) {
    div.style.backgroundColor = "#121212";
    div.style.color = "white";
  });
}

function toggleLightMode() {
  document.body.style.backgroundColor = "#ffffff"; // Set default light mode background color
  document.body.style.color = "#000000"; // Set default light mode text color

  var navbarUl = document.querySelector('nav ul');
  navbarUl.style.backgroundColor = ""; // Set default light mode background color for navbar
  navbarUl.style.color = "#000000"; // Set default light mode text color for navbar links

  var anchors = document.querySelectorAll('a');
  anchors.forEach(function(anchor) {
    anchor.style.color = "#000000"; // Set default light mode link color
  });

  var navbarLi = document.querySelectorAll('nav li');
  navbarLi.forEach(function(li) {
    li.style.color = "#000000"; // Set default light mode list item color
  });

  var buttons = document.querySelectorAll('.btn');
  buttons.forEach(function(button) {
    button.style.color = "#000000"; // Set default light mode button text color
    button.style.borderColor = "#000000"; // Set default light mode button border color
  });

  var divs = document.querySelectorAll('div');
  divs.forEach(function(div) {
    div.style.backgroundColor = ""; // Set default light mode background color for divs
    div.style.color = "#000000"; // Set default light mode text color for divs
  });

  // Revert image sources to default light mode
  let licon = document.querySelectorAll("article img");
  licon.forEach((dets) =>{
    dets.src = "./assets/checkmark.png"; // Replace with default light mode icon path
  });
  let ficon = document.querySelector(".details-container img");
  ficon.src = "./assets/experience.png"; // Replace with default light mode icon path
  let llicon = document.querySelector(".details-container #second-icon");
  llicon.src = "./assets/education.png"; // Replace with default light mode icon path

  let arrow = document.querySelectorAll(".icon");
  arrow[13].src = "./assets/arrow.png"; // Replace with default light mode icon path
  arrow[4].src = "./assets/arrow.png"; // Replace with default light mode icon path
  arrow[14].src = "./assets/arrow.png"; // Replace with default light mode icon path
  arrow[15].src = "./assets/email.png"; // Replace with default light mode icon path
}
