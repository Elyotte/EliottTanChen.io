fetch("http:/Components/navbar.html")
.then(Response => Response.text())
.then(data => {document.getElementById("navbar").innerHTML = data;})
.catch(error => Console.error("navbar loading error : ", error));