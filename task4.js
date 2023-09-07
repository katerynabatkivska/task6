document.addEventListener("DOMContentLoaded", function() {
  var btn = document.querySelector(".btn");
  var outBlock = document.querySelector(".out");
  var inputs = document.querySelectorAll(".arr");

  btn.addEventListener("click", function(e) {
    e.preventDefault();

    var data = {};

    inputs.forEach(function(input) {
      var fieldName = input.getAttribute("data-form");
      var value = input.value;
      data[fieldName] = value;
    });

    var outputText = "Дані з полів: \n";
    for (var key in data) {
      outputText += key + ": " + data[key] + "\n";
    }

    outBlock.textContent = outputText;
  });
});
