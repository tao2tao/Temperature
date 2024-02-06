const celciusInput = document.getElementById("celcius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");
const gramInput = document.getElementById("grams")
const ounceInput = document.getElementById("ounces")
const feetInput = document.getElementById("feet")
const meterInput = document.getElementById("meter")

const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function (e) {
        let value = parseFloat(e.target.value);
        
        switch (e.target.name) {
            case "celcius":
                fahrenheitInput.value = ((value * 1.8) + 32).toFixed(3);
                kelvinInput.value = (value + 273.15).toFixed(3);
                break;
            case "fahrenheit":
                celciusInput.value = ((value - 32) / 1.8).toFixed(3);
                kelvinInput.value = (((value - 32) / 1.8) + 273.15).toFixed(3);
                break;
            case "kelvin":
                celciusInput.value = (value - 273.15).toFixed(3);
                fahrenheitInput.value = (((value - 273.15) * 1.8) + 32).toFixed(3);
                break;
            case "grams":
                ounceInput.value = (value / 28.3495).toFixed(3);
                break;
            case "ounces":
                gramInput.value = (value * 28.3495).toFixed(3);
                break;
            case "meter":
                feetInput.value = (value / 3.821).toFixed(3);
                break;
            case "feet":
                meterInput.value = (value * 3.821).toFixed(3);
                break;
        }
    });
}