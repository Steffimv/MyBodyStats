var age = document.getElementById("age");
var height = document.getElementById("height"); 
var weight = document.getElementById("weight"); 
var male = document.getElementById("m"); 
var female = document.getElementById("f"); 
var form = document.getElementById("form"); 
let resultArea=document.querySelector(".comment");

function calculate(){
    if(age.value==''|| height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
        modal.style.display="block";
        modalText.innerHTML= `All fields are required`; 
    }
    else{
        countBmi();
    }
}

function countBmi(){
    var p = [age.value,height.value,weight.value];
    if(male.checked){
        p.push("male");
    }
    else if(female.checked){
        p.push("female");
    }

    var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);

    var result = '';
    if(bmi<18.5){
        result='Underweight';
    }
    else if(18.5<=bmi&&bmi<=24.99){
        result='Healthy';
    }
    else if(25<=bmi&&bmi<=29.99){
        result='Overweight';
    }    
    else if(30<=bmi&&bmi<=34.99){
        result='Obese';
    }
    else if(35<=bmi){
        result='Extremely Obese';
    }

resultArea.style.display="block";
document.querySelector(".comment").innerHTML=`You are <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML=bmi.toFixed(2);
}