let display = "";

function addValue(value) {
    display += value;
    newNum();
}

function clearValue() {
    display = "";
    newNum();
}

function calculate() {
    try {
        const result = eval(display);
        display = String(result);
        newNum();
    } catch (error) {
        display = "Error";
        newNum();
    }
}

function backSpace() {
    display = display.slice(0, -1);
    newNum();
}

function newNum() {
    document.getElementById("inputField").value = display;
}

document.addEventListener("keydown", handleKeyboardInput);

function handleKeyboardInput(event) {
    const key = event.key;


    if (/[\d+\-*/.=]/.test(key) || key === "Backspace") {
        event.preventDefault();
        if (key === "=") {
            calculate();
        } else if (key === "Backspace") {
            backSpace();
        }
        else {
            addValue(key);
        }
    }
    else if (key === "c" || key === "C") {
        event.preventDefault();
        clearValue();
    }
}