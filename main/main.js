function togglePopup() {
  document.getElementById("modal").classList.toggle("active");
  document.getElementById("infomodal").classList.toggle("active");
}

function togglePopupresp() {
  document.getElementById("modal").classList.toggle("active");
  document.getElementById("infomodalresp").classList.toggle("active");
}

function togglePopup2() {
  document.getElementById("modal").classList.toggle("active");
}

function togglePopup3() {
  document.getElementById("infomodal").classList.toggle("active");
}

function changeBg() {
  let bg = document.getElementById("bg");
  bg.src = "/assets/bg.png";
  document.getElementById("radioxx").setAttribute("class", "showmodal");
  document.getElementById("radioyy").setAttribute("class", "showmodal2");
}

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const menu = dropdown.querySelector(".menu");
  select.addEventListener("click", () => {
    menu.classList.toggle("menu-open");
  });
});

function showDrop() {
  document.getElementById("roommain").classList.toggle("active");
}

function showDrop2() {
  document.getElementById("roomselect").classList.toggle("active");
}

function changeroom() {
  document.getElementById("radioxx").setAttribute("class", "style1");
  document.getElementById("radioyy").setAttribute("class", "radioyy");
  let bg = document.getElementById("bg");
  bg.src = "/assets/bg2.jpg";
}

function togglePopupresp2() {
  document.getElementById("infomodalresp").classList.toggle("active");
}
