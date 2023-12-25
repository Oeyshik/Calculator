const result = document.getElementById("output");
const btn = document.querySelectorAll(".btn");

for (item of btn){
    item.addEventListener("click", (e)=>{
        btn_text = e.target.innerText;
        if (btn_text == "÷"){
            btn_text = "/";
        }
    
        if (btn_text == "*"){
            btn_text = "*";
        }
    
        if (btn_text == "+"){
            btn_text = "+";
        }
    
        if (btn_text == "-"){
            btn_text = "-";
        }
    
        result.value += btn_text;
    });
}

function calculate() {
    try {
        if (result.value === "e") {
            result.value = Math.exp(1);
        } else if (result.value === "π") {
            result.value = Math.PI;
        } else if (result.value.endsWith("^2")) {
            const base = parseFloat(result.value.slice(0, -2));
            result.value = Math.pow(base, 2);
        } else {
            result.value = eval(result.value);
        }
    } catch(error) {
        alert("Invalid!!!");
    }
}


function allClear(){
    result.value = "";
}

function delLastChar(){
    result.value = result.value.slice(0, -1);
}

function power(){
    result.value += "^2";
}

function sin(){
    result.value = Math.sin(result.value);
}

function cos(){
    result.value = Math.cos(result.value);
}

function tan(){
    result.value = Math.tan(result.value);
}

function log(){
    result.value = Math.log(result.value);
}

function sqrt(){
    result.value = Math.sqrt(result.value);
}

function pi(){
    result.value = "π";
}

function exp() {
    result.value = "e";
}

function fact(){
    var i, num, f;
    f=1;
    num = result.value;

    for (i=1; i<=num; i++){
        f=f*i;
    }

    i=i-1;

    result.value = f;
}

