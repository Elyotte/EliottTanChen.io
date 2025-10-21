const base = window.location.pathname.includes("EliottTanChen.io")
  ? "/EliottTanChen.io/"
  : "./";

fetch(`${base}Components/navbar.html`)
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  })
  .catch(error => console.error("Navbar loading error:", error));