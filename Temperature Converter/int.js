function convertTemperature() {
    // Get user input
    const temperatureInput = document.getElementById('temperature').value;
    const unitFrom = document.getElementById('unitFrom').value;
    const unitTo = document.getElementById('unitTo').value;
    // Validate input
    if (!temperatureInput || isNaN(temperatureInput)) {
        alert('Please enter a valid temperature.');
        return;
    }
    // Convert temperature
    let convertedTemperature;

    if (unitFrom === 'celsius' && unitTo === 'fahrenheit') {
        convertedTemperature = (parseFloat(temperatureInput) * 9/5) + 32;
    } else if (unitFrom === 'fahrenheit' && unitTo === 'celsius') {
        convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9;
    } else if (unitFrom === 'celsius' && unitTo === 'kelvin') {
        convertedTemperature = parseFloat(temperatureInput) + 273.15;
    } else if (unitFrom === 'kelvin' && unitTo === 'celsius') {
        convertedTemperature = parseFloat(temperatureInput) - 273.15;
    } else if (unitFrom === 'fahrenheit' && unitTo === 'kelvin') {
        convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9 + 273.15;
    } else if (unitFrom === 'kelvin' && unitTo === 'fahrenheit') {
        convertedTemperature = (parseFloat(temperatureInput) - 273.15) * 9/5 + 32;
    } else {
        // If the selected units are the same, no conversion is needed
        convertedTemperature = parseFloat(temperatureInput);
    }
    // Display result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${unitTo}`;
}