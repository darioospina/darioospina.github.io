/*
@name: Assignement1
@Course Code: SODV1201
@class: Software Development Diploma program.
@author: Darío Ospina Latorre
*/

intro = () => {
var me1 = document.getElementById("myName");
var me2 = document.getElementById("myProfession");
var me3 = document.getElementById("bio");
var me4 = document.getElementById("textTitle");
setTimeout(function(){
    me1.innerHTML = "Dario Ospina Latorre";
},2000);
setTimeout(function(){
    me2.innerHTML = "Software developer / Financial specialist";
},2500);
setTimeout(function(){
    me3.innerHTML = "Colombian financial specialist with over 7 years of experience working for large companies in corporate finance, financial planning and due diligence. Now I'm studying software development in Canada intending to become a great programmer.";
},10000);
}


function gettingGrade() {
let input = document.getElementById("getGrade").value;
let msg = document.getElementById("mark-input-box");
try {
if (input == null || input == "" || input.trim()  == '') {
    msg.innerHTML = "<span style= 'color: #FF69B4'>Enter a valid value between 0 and 100</span>"
} else if (input < 0 || input > 100) {
    input = parseInt(document.getElementById("getGrade").value);
    msg.innerHTML = "<span style= 'color: #FF69B4'>Enter a valid value between 0 and 100</span>"
} else if (input >= 0 && input <= 50) {
    msg.innerHTML = "<span style= 'color: #00FF00'>Your grade is F. Try harder next time.</span>"    
} else if (input > 50 && input <= 70) {
    msg.innerHTML = "<span style= 'color: #00FF00'>Your grade is D. Try harder next time.</span>"    
} else if (input > 70 && input <= 80) {
    msg.innerHTML = "<span style= 'color: #00FF00'>Your grade is C. You can do better.</span>"    
} else if (input > 80 && input <= 90) {
    msg.innerHTML = "<span style= 'color: #00FF00'>Your grade is B. Good job.</span>"    
} else if (input > 90 && input <= 100) {
    msg.innerHTML = "<span style= 'color: #00FF00'>Your grade is A. Amazing!!</span>"    
}} catch(e) {
    alert("Error" + e);
}
}


