//For BMI
//< 18.5 = Underweight
//25 <= BMI >= 18.5 = Normal
//30 <= BMI > 25 = Overweight
// > 30 = Obese

/*
var height = Number(document.getElementById('height').value);
var heightunits = Number(document.getElementById('heightunits').value);
var weight = Number(document.getElementById('weight').value);
var weightunits = Number(document.getElementById('weightunits').value);

//Conversion of units
  if (heightunits=="inches") height/=39.3700787;
  if (weightunits=="lb") weight/=2.20462;

  //Perform calculation
  var BMI=weight/Math.pow(height,2);

  //Display result of calculation
  document.getElementById("output").innerText=Math.round(BMI*100)/100;
//condition
  if (output < 18.5)
  document.getElementById("comment").value = "Underweight";
  if (output>=18.5 && output<=25)
  document.getElementById("comment").value = "Normal";
  if (output>=25 && output<=30)
  document.getElementById("comment").value = "Obese";
  if (output>30)
  document.getElementById("comment").value = "Overweight";
  document.getElementById("answer").value = "output"; 
*/

function measureBMI () {
    // true = metric, false = imperial
    let unit = document.getElementById("bmi-metric").checked,
        weight = document.getElementById("bmi-weight"),
        weightu = document.getElementById("bmi-weight-unit"),
        height = document.getElementById("bmi-height"),
        heightu = document.getElementById("bmi-height-unit");
   
    if (unit) {
      weightu.innerHTML = "KG";
      weight.min = 1;
      weight.max = 635;
      heightu.innerHTML = "CM";
      height.min = 54;
      height.max = 272;
    } else {
      weightu.innerHTML = "LBS";
      weight.min = 2; 
      weight.max = 1400;
      heightu.innerHTML = "IN";
      height.min = 21;
      height.max = 107;
    }
  }
   
  function calcBMI () {
    // (A) Get elements
    let bmi = null,
        unit = document.getElementById("bmi-metric").checked, // true = metric, false = imperial
        weight = parseInt(document.getElementById("bmi-weight").value),
        height = parseInt(document.getElementById("bmi-height").value),
        results = document.getElementById("bmi-results");
   
    // (B) Calculate BMI
    // Metric BMI = Mass (kg) / Height (m) square 
    if (unit) {
      height = height / 100;
      bmi = weight / (height * height);
    }
    // Imperial BMI = 703 X Mass (lbs) / Height (in) square 
    else {
      bmi = 703 * (weight / (height * height));
    }
    // Round off
    bmi = Math.round(bmi * 100) / 100; // Round off 2 decimal places
   
    // (C) Show Results
    if (bmi < 18.5) {
      results.innerHTML = bmi + " - Underweight";
    } else if (bmi < 25) {
      results.innerHTML = bmi + " - Normal weight";
    } else if (bmi < 30) {
      results.innerHTML = bmi + " - Pre-obesity";
    } else if (bmi < 35) {
      results.innerHTML = bmi + " - Obesity class I";
    } else if (bmi < 40) {
      results.innerHTML = bmi + " - Obesity class II";
    } else {
      results.innerHTML = bmi + " - Obesity class III";
    }
    return false;
  }
 
  
  
   