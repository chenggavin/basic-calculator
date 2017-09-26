var solarPanel = document.getElementById('solarPanel');
var display = document.getElementById('display');
var digits = document.getElementsByClassName('numeric');




// Wait for page to load, then...
document.onreadystatechange = function() {
  if (document.readyState === "interactive") {
    for (i = 0; i < digits.length; i++) {
      digits[i].addEventListener("click", ButtonLogic);
    }
    solarPanel.addEventListener("click", Surprise);
  }
};


function ButtonLogic() {

  // alert("You clicked me!");

  var digit = this.innerHTML;

  var currentDisplay = display.innerHTML;

  if (currentDisplay === "0") {
    display.innerHTML = digit;
  }
  else {
    display.innerHTML = currentDisplay + digit;
  }

}


function Surprise() {
  alert("SURPRISE!");
}