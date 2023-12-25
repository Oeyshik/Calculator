const result = document.getElementById("output");
const btn = document.querySelectorAll(".btn");

for (const item of btn) {
    item.addEventListener("click", (e) => {
        const btn_text = e.target.innerText.trim();
        if (btn_text === "÷") {
            result.value += "/";
        } else if (btn_text === "*") {
            result.value += "*";
        } else if (btn_text === "+") {
            result.value += "+";
        } else if (btn_text === "-") {
            result.value += "-";
        } else {
            result.value += btn_text;
        }
    });
}

function calculate() {
    try {
        let expression = result.value;

        // Replace textual representations with their mathematical counterparts
        expression = expression.replace(/e/g, "Math.E");
        expression = expression.replace(/π/g, "Math.PI");
        expression = expression.replace(/log/g, "Math.log10");
        expression = expression.replace(/√/g, "Math.sqrt");
        expression = expression.replace(/\^2/g, "**2");
        expression = expression.replace(/(\d+)!/g, (num) => {
            return factorial(parseInt(num));
        });
        expression = expression.replace(/sin\(/g, "Math.sin(");
        expression = expression.replace(/cos\(/g, "Math.cos(");
        expression = expression.replace(/tan\(/g, "Math.tan(");

        // Add closing parentheses for any open parentheses to balance the expression
        let openParenCount = (expression.match(/\(/g) || []).length;
        let closeParenCount = (expression.match(/\)/g) || []).length;

        if (openParenCount > closeParenCount) {
            const diff = openParenCount - closeParenCount;
            for (let i = 0; i < diff; i++) {
                expression += ')';
            }
        }

        // Evaluate the expression
        const evaluated = eval(expression);

        // Update the result value
        result.value = evaluated;
    } catch (error) {
        result.value = "Invalid Expression";
    }
}

function allClear() {
    result.value = "";
}

function delLastChar() {
    result.value = result.value.slice(0, -1);
}

function power() {
    result.value += "^2";
}

function sin() {
    result.value += "sin(";
}

function cos() {
    result.value += "cos(";
}

function tan() {
    result.value += "tan(";
}

function log() {
    result.value += "log(";
}

function sqrt() {
    if (result.value.endsWith(")") || !result.value.trim()) {
        result.value += "√(";
    } else {
        result.value += "*√(";
    }
}

function pi() {
    result.value = "π";
}

function exp() {
    result.value = "e";
}

function fact() {
    result.value += "!";
}

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}
