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

  if (this.classList.contains('numeric')) {
    numeric(keyLabel);
  }

  else if (this.classList.contains('calculate')) {
    calculate();
  }

  else if (this.classList.contains('decimal')) {
    decimal(keyLabel);
  }

  else if (this.classList.contains('operator')) {
    operator(keyLabel);
  }

  else if (this.classList.contains('allclear')) {
    allClear();
  }

  else if (this.classList.contains('clear')) {
    clear();
  }

}

function operator(keyLabel) {

  if (value1 === '') {

    // set value1 = 0
    value1 = 0;

    // store keyLabel in selectedOperator
    selectedOperator = keyLabel;

  }
  else {

    if (selectedOperator === '') {

      // store keyLabel in selectedOperator
      selectedOperator = keyLabel;

    }
    else {

      if (value2 === '') {

        // store keyLabel in selectedOperator
        selectedOperator = keyLabel;

      }
      else {

        // calculate!
        calculate();

        // store results of calculation in value1
        

        // update display with results of calculation (which now is value1)
        

        // clear value2
        value2 = '';

        // store keyLabel in selectedOperator
        selectedOperator = keyLabel;


      }

    }

  }

}


function decimal(keyLabel) {
  if (value1.indexOf('.') == -1) {
    display.innerHTML = display.innerHTML + keyLabel;
    value1 = value1 + keyLabel;
  }
  else {
    // There is already a decimal in this number.
    // Ignore it.
  }    
}

function calculate() {

  var results = 0;

  switch (selectedOperator) {

    case "+":
      results = Number(value1) + Number(value2);
      break;

    case "-":
      results = Number(value1) - Number(value2);
      break;

    case "x":
      results = Number(value1) * Number(value2);
      break;

    case "/":
      results = Number(value1) / Number(value2);
      break;

    default:
      alert("What are you doing?!?!?");

  }

}

function numeric(keyLabel) {

  if (selectedOperator === '') {
    value1 = properAppend(value1, keyLabel);
    display.innerHTML = value1;
  }
  else {
    value2 = properAppend(value2, keyLabel);
    display.innerHTML = value2;
  }

}

function properAppend(main, added) {
  if (main === "0") {
    return added;
  }
  return main + added;
}


function clear() {
  if (selectedOperator === '') {
    value1 = '';
  }
  else {
    value2 = '';
  }
  alert("Clear! (still needs to be tested)");
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