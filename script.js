let display = document.getElementById("display");

function addValue(value) {
    display.value = display.value + value;
}

function clearDisplay() {
    display.value = "";
}

function deleteNumber() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

document.addEventListener("keydown", function(event) {

    if (
        (event.key >= "0" && event.key <= "9") ||
        event.key === "+" ||
        event.key === "-" ||
        event.key === "*" ||
        event.key === "/" ||
        event.key === "."
    ) {
        addValue(event.key);
    }

    if (event.key === "Enter") {
        calculate();
    }

    if (event.key === "Escape") {
        clearDisplay();
    }

    if (event.key === "Backspace") {
        deleteNumber();
    }
});