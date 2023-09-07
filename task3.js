var body = document.body;
var mainElement = document.createElement("main");
var divElement = document.createElement("div");
var pElement = document.createElement("p");

mainElement.className = "mainClass check item";
divElement.id = "myDiv";

pElement.textContent = "First paragraph";

divElement.appendChild(pElement);
mainElement.appendChild(divElement);
body.appendChild(mainElement);
