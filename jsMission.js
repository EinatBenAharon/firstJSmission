
window.onload = function () {
    // boomTryAgain()
    boomTryAgainBtn()
    // addition2Numbers()
    addition2NumbersBtn()
    // multiply2Numbers()
    multiply2NumbersBtn()
    // dayOfTheWeek()
    printDayOfWeek()
    // dayOfTheMonth()
    printDayOfTheMonth()
    // btnPurim()
    // btnShavuot()
    // btnPassover()
    // btnSuckot()
    // signInForm()
    signInBtn()
}
//_________________משימה 1_____________________
function boomTryAgain() {
    let number1boom = document.querySelector("#input_boom_tryAgain").value
    let number2boom = document.querySelector("#input_boom_tryAgain2").value
    if (number1boom == number2boom) {
        document.querySelector("#span_boom_tryAgain").innerHTML = "BOOM!!"
    } else {
        document.querySelector("#span_boom_tryAgain").innerHTML = "TRY AGAIN"
    }
}
function boomTryAgainBtn() {
    let check1_btn = document.querySelector("#btn_boom_tryAgain");
    check1_btn.addEventListener("click", boomTryAgain)
}
//______________________משימה 2_________________
function addition2Numbers() {
    let number1Add, number2Add, sumAdd;
    number1Add = parseInt(document.querySelector("#input_addition").value);
    number2Add = parseInt(document.querySelector("#input_addition2").value);
    sumAdd = number1Add + number2Add;
    document.querySelector("#span_addition").innerHTML = sumAdd
}
function addition2NumbersBtn() {
    let addBtn = document.querySelector("#btn_addition");
    addBtn.addEventListener("click", addition2Numbers)
}
//_______________________משימה 3_________________
function multiply2Numbers() {
    let number1Multi, number2Multi, sumMulti;
    number1Multi = parseInt(document.querySelector("#input_multi").value);
    number2Multi = parseInt(document.querySelector("#input_multi2").value);
    sumMulti = number1Multi * number2Multi;
    document.querySelector("#span_multi").innerHTML = sumMulti
}
function multiply2NumbersBtn() {
    let multiBtn = document.querySelector("#btn_multi");
    multiBtn.addEventListener("click", multiply2Numbers)
}
//__________________________משימה 4_______________
function dayOfTheWeek() {
    let dayOfWeek = document.querySelector("#select_daysOfWeek").value
    if (dayOfWeek == 1) {
        document.querySelector("#span_daysOfWeek").innerHTML = "Good Week!";
        document.querySelector("#span_daysOfWeek").style.background = "yellow";
    } else if (dayOfWeek == 2 || dayOfWeek == 3 || dayOfWeek == 4) {
        document.querySelector("#span_daysOfWeek").innerHTML = "Good Day!";
        document.querySelector("#span_daysOfWeek").style.background = "aqua";
    } else if (dayOfWeek == 5 || dayOfWeek == 6) {
        document.querySelector("#span_daysOfWeek").innerHTML = "Happy Weekend!";
        document.querySelector("#span_daysOfWeek").style.background = "red";
    } else if (dayOfWeek == 7) {
        document.querySelector("#span_daysOfWeek").innerHTML = "תשכחי מיום חופש! תשבי ותלמדי ג'אווה סקריפט";
        document.querySelector("#span_daysOfWeek").style.background = "pink";
    }
}
function printDayOfWeek() {
    let printBless = document.querySelector("#select_daysOfWeek");
    printBless.addEventListener("change", dayOfTheWeek)
}
// _______________________משימה 5________________________
function dayOfTheMonth() {
    let dayOfMonth = document.querySelector("#input_dayOfMonth").value
    if (dayOfMonth == 1) {
        document.querySelector("#span_dayOfMonth").innerHTML = "Good Month";
    } else if (dayOfMonth < 10) {
        document.querySelector("#span_dayOfMonth").innerHTML = "Start Work";
    } else if (dayOfMonth == 10) {
        document.querySelector("#span_dayOfMonth").innerHTML = "Get Salary";
    } else if (dayOfMonth >= 11 && dayOfMonth <= 20) {
        document.querySelector("#span_dayOfMonth").innerHTML = "BE HAPPY";
    } else if (dayOfMonth > 20 && dayOfMonth <= 30) {
        document.querySelector("#span_dayOfMonth").innerHTML = "The end";
    } else if (dayOfMonth == 31) {
        document.querySelector("#span_dayOfMonth").innerHTML = "BOOM BOOM";
    }
}
function printDayOfTheMonth() {
    let printMonth = document.querySelector("#input_dayOfMonth");
    printMonth.addEventListener("input", dayOfTheMonth)
}
//___________________________________משימה 6_____________________
function btnPurim() {
    document.querySelector("#span_holiday").innerHTML = "happy purim"
}
function btnShavuot() {
    document.querySelector("#span_holiday").innerHTML = "eat milk"
}
function btnSuckot() {
    document.querySelector("#span_holiday").innerHTML = "build sucka"
}
function btnPassover() {
    document.querySelector("#span_holiday").innerHTML = "clear home"
}
//______________________________________משימה 7____________________
function signInForm() {

    let userPwd = document.querySelector("#input_password").value;
    let userName = document.querySelector("#input_username").value;
    if (userPwd === "123" && userName === "admin") {
        alert("connected")
        document.querySelector("#btn_form").type = "sumbit"
    } else if (userPwd.length < 6) {
        alert("the password must contain at least 6 numbers")
        document.querySelector("#input_password").style.background = "red"
    }
    else {
        document.querySelector("#input_password").style.background = "red"
        document.querySelector("#input_username").style.background = "red"
        document.querySelector("#span_formMsg").innerHTML = "the details you filled doesn't correct";
    }
}
function signInBtn() {
    let btnForm = document.querySelector("#btn_form");
    btnForm.addEventListener("click", signInForm)
}


