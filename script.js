function convert() {
    var temperatureInput = document.getElementById("temperature").value;
    var selectedUnit = document.querySelector('input[name="unit"]:checked').value;
    var resultElement = document.getElementById("result");
    
    if (!temperatureInput || isNaN(temperatureInput)) {
        resultElement.textContent = "Please enter a valid temperature.";
        return;
    }
    
    var temperature = parseFloat(temperatureInput);
    var convertedTemperature;
    var result;

    if (selectedUnit === "celsius") {
        convertedTemperature = (temperature * 9/5) + 32;
        result = temperature + "°C is equal to " + convertedTemperature.toFixed(2) + "°F and " + (temperature + 273.15).toFixed(2) + "K";
    } else if (selectedUnit === "fahrenheit") {
        convertedTemperature = (temperature - 32) * 5/9;
        result = temperature + "°F is equal to " + convertedTemperature.toFixed(2) + "°C and " + ((temperature - 32) * 5/9 + 273.15).toFixed(2) + "K";
    } else if (selectedUnit === "kelvin") {
        convertedTemperature = temperature - 273.15;
        result = temperature + "K is equal to " + (convertedTemperature).toFixed(2) + "°C and " + ((convertedTemperature) * 9/5 + 32).toFixed(2) + "°F";
    }

    resultElement.textContent = result;
}

document.getElementById("convertButton").addEventListener("click", convert);
