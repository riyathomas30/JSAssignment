function myFunction() {
    let name = document.getElementById("name");
    let partnername = document.getElementById("partnername");
    let location = document.getElementById("location");
    let designation = document.getElementById("designation");
    let company = document.getElementById("company");
    alert(company.value);
    if (name.value && partnername.value && location.value && designation.value && company.value) {

        document.getElementById("loginData").innerHTML = 'Hi I am ' + name.value + 'and my partners name is ' + partnername.value + ' . I stay in ' + location.value + ' .I am working as ' + designation.value + ' in ' + company.value;
        //alert('hi');
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
    /*let detailsobj = { name: "Riya", partnername: "Thomas", location: "Mauritius", Designation: "Software Engineer" };
    let dataobj = '';
    for (let indexobj of detailsobj) {

        dataobj += `${indexobj} = ${detailsobj[indexobj]}<br>`;

    }
    document.getElementById("forofLoopObject").innerHTML = '<br>FOR OF LOOP IN OBJECT<br>' + dataobj;*/

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
    let Base = document.getElementById('Base');
    let Height = document.getElementById('Height');
    if (Base && Height) {
        let areaValue = (Base.value * Height.value) / 2;
        document.getElementById("triangleArea").innerHTML = 'Area of the triangle :' + areaValue;
    }
}


function calculate(value) {
    let operator = value;
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;
    let result = '';

    switch (operator) {

        case '*': result = number1 * number2; break;
        case '+': result = Number(number1) + Number(number2); break;
        case '-': result = number1 - number2; break;
        case '/': result = number1 / number2; break;
    };

    document.getElementById("output").innerHTML = "Result is " + result;
}













