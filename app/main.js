var solarPanel = document.getElementById('solarPanel');
var display = document.getElementById('display');
var keys = document.getElementsByClassName('key');

var value1;
var value2;
var selectedOperator;



// Wait for page to load, then...
document.onreadystatechange = function() {
  if (document.readyState === "interactive") {

    allClear();

    for (i = 0; i < keys.length; i++) {
      keys[i].addEventListener("click", ButtonLogic);
    }
    
    solarPanel.addEventListener("click", Surprise);

  }
};


function ButtonLogic() {

  var keyLabel = this.innerHTML;

  // console.log(this.classList.contains('numeric'));

  if (this.classList.contains('numeric')) {
    if (display.innerHTML === "0") {
      display.innerHTML = keyLabel;
    }
    else {
      display.innerHTML = display.innerHTML + keyLabel;
    }
  }
  else if (this.classList.contains('decimal')) {
   
    alert("Handle the decimal!");

  }
  else if (this.classList.contains('operator')) {

    alert("Handle the operator!");

  }
  else if (this.classList.contains('allclear')) {
    allClear();
  }
  else if (this.classList.contains('clear')) {
    clear();
  }


}

function clear() {
  if (selectedOperator === '') {
    value1 = '';
  }
  else {
    value2 = '';
  }
  alert("Clear!");
}

function allClear() {
  value1 = '';
  value2 = '';
  selectedOperator = '';
  display.innerHTML = '0';
}

function Surprise() {
  alert("SURPRISE!");
}