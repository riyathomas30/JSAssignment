window.onload = function () {
    // alert('onload');
    myFunction();
    calculateArea();
}
window.onerror = function (message, url, line) {
    alert(message + ', ' + url + ', ' + line);
};

function myFunction() {
    let name = getQueryVariable("name");
    let partnername = getQueryVariable("partnername");
    let location = getQueryVariable("location");
    let designation = getQueryVariable("designation");
    let company = getQueryVariable("company");
    if (name && partnername && location && designation && company) {
        name = name.replace('+', ' ');
        document.getElementById("loginData").innerHTML = 'Hi I am ' + name + 'and my partners name is ' + partnername + ' . I stay in ' + location + ' .I am working as ' + designation + ' in ' + company;
    }
}
function implementforinLoop() {
    let detailsobj = { name: "Riya", partnername: "Thomas", location: "Mauritius", Designation: "Software Engineer" };
    let dataobj = '';
    for (let indexobj in detailsobj) {

        dataobj += `${indexobj} = ${detailsobj[indexobj]}<br>`;

    }
    document.getElementById("forinLoopObject").innerHTML = '<br>FOR IN LOOP IN OBJECT<br><b>Key</b>\t<b>Value</b><br>' + dataobj;
    let detailsarray = ["Riya", "Thomas", "Mauritius", "Software Engineer"];
    let dataarray = '';
    for (let indexarray in detailsarray) {

        dataarray += `${indexarray} = ${detailsarray[indexarray]}<br>`;

    }
    document.getElementById("forinLoopArray").innerHTML = '<br>FOR IN LOOP IN ARRAY<br><b>Key</b>\t<b>Value</b><br>' + dataarray;
}
function implementforofLoop() {
    let detailsobj = { name: "Riya", partnername: "Thomas", location: "Mauritius", Designation: "Software Engineer" };
    let dataobj = '';
    for (let indexobj of detailsobj) {

        dataobj += `${indexobj} = ${detailsobj[indexobj]}<br>`;

    }
    document.getElementById("forofLoopObject").innerHTML = '<br>FOR OF LOOP IN OBJECT<br>' + dataobj;

    let detailsarray = ["Riya", "Thomas", "Mauritius", "Software Engineer"];
    let dataarray = '';
    for (let indexarray of detailsarray) {

        dataarray += `${indexarray} <br>`;

    }
    document.getElementById("forofLoopArray").innerHTML = '<br>FOR OF LOOP IN ARRAY<br>' + dataarray;
}
function precedenceOperator() {
    let no1 = 3;
    let no2 = 8;
    let no3 = 5;
    let output1 = no1 + no2 * no3;
    let output2 = no1 / no2 - no3;
    let output3 = no3 * no2 + no3 - no1;
    let output4 = no2 % no1 * no3;
    document.getElementById("precedenceOperator").innerHTML = "<br>Output1:" + output1 + "<br>Output2:" + output2 + "<br>Output3:" + output3 + "<br>Output4:" + output4;
}

function implementForLoop() {
    let loop = '';
    for (let i = 0; i < 200; i = i + 2) {
        loop += ' ' + i + ' '
    }
    document.getElementById("loopData").innerHTML = loop;

}
function calculateArea() {
    let sideA = getQueryVariable("sideA")
    let sideB = getQueryVariable("sideB");
    let sideC = getQueryVariable("sideC");
    if (sideA && sideB && sideC) {
        let semiPeri = (sideA + sideB + sideC) / 2;
        let areaValue = Math.sqrt(
            semiPeri * (semiPeri - sideA) * (semiPeri - sideB) * (semiPeri - sideC)
        );

        document.getElementById("displayArea").innerHTML = 'Area of the traiangle :' + areaValue;
    }



}
function getQueryVariable(variable) {
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
}

//



