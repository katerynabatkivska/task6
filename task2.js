var myDiv = document.getElementById("myDiv");
var myList = document.getElementById("myList");
var spanElement = document.querySelector("span");

while (myDiv.firstChild) {
    myDiv.removeChild(myDiv.firstChild);
}

var p1 = document.createElement("p");
p1.textContent = "First paragraph";
myDiv.appendChild(p1);

var p2 = document.createElement("p");
p2.textContent = "Second paragraph";
myDiv.appendChild(p2);

var p3 = document.createElement("p");
p3.textContent = "Third paragraph";
myDiv.appendChild(p3);

var p4 = document.createElement("p");
p4.textContent = "Fourth paragraph";
myDiv.appendChild(p4);

myList.style.listStyleType = "none";
myList.style.display = "flex";
myList.style.flexDirection = "row";

spanElement.style.display = "none";
