const display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){

    try{

        if(display.value.trim()===""){
            return;
        }

        display.value = eval(display.value);

    }
    catch{

        display.value = "Error";

    }
}

/* Scientific */

const sciDisplay =
document.getElementById("sciDisplay");

function sciAppend(value){
    sciDisplay.value += value;
}

function sciDeleteLast(){
    sciDisplay.value =
    sciDisplay.value.slice(0,-1);
}

function sciClear(){
    sciDisplay.value = "";
}

function sciCalculate(){

    try{

        if(sciDisplay.value.trim()===""){
            return;
        }

        sciDisplay.value =
        eval(sciDisplay.value);

    }
    catch{

        sciDisplay.value = "Error";

    }
}

/* Toggle */

const standardBtn =
document.getElementById("standardBtn");

const scientificBtn =
document.getElementById("scientificBtn");

const standardCalc =
document.getElementById("standardCalc");

const scientificCalc =
document.getElementById("scientificCalc");

standardBtn.addEventListener("click",()=>{

    standardCalc.classList.add("activeCalc");
    scientificCalc.classList.remove("activeCalc");

    standardBtn.classList.add("active");
    scientificBtn.classList.remove("active");
});

scientificBtn.addEventListener("click",()=>{

    scientificCalc.classList.add("activeCalc");
    standardCalc.classList.remove("activeCalc");

    scientificBtn.classList.add("active");
    standardBtn.classList.remove("active");
});

/* Keyboard Support */

document.addEventListener("keydown",(event)=>{

    const key = event.key;

    if(
        (key >= "0" && key <= "9") ||
        ["+","-","*","/",".","%"].includes(key)
    ){
        appendValue(key);
    }

    if(key==="Enter"){
        calculate();
    }

    if(key==="Backspace"){
        deleteLast();
    }

    if(key==="Escape"){
        clearDisplay();
    }

});