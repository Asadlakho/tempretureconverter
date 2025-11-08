    function convert() {
      var value = parseFloat(document.getElementById("temperature").value);
      var unit = document.getElementById("unit").value;
      var resultText = "";

      if (isNaN(value)) {
        resultText = " Please enter a valid number.";
      } 
      else if (unit == "C") {
        resultText = value + "°C = " + (value * 9/5 + 32).toFixed(2) + "°F | " + (value + 273.15).toFixed(2) + "K";
      } 
      else if (unit == "F") {
        resultText = value + "°F = " + ((value - 32) * 5/9).toFixed(2) + "°C | " + (((value - 32) * 5/9) + 273.15).toFixed(2) + "K";
      } 
      else if (unit == "K") {
        resultText = value + "K = " + (value - 273.15).toFixed(2) + "°C | " + (((value - 273.15) * 9/5) + 32).toFixed(2) + "°F";
      }

      document.getElementById("result").innerText = resultText;
    };