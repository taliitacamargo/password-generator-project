

function genPassword() {
var password = document.getElementById ("password");
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 10;
var password = "";
for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
}
    document.getElementById("password").value = password;
}

function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
}

//activities to look at to help -00compound-name-generator
//activities 28 mini-project (see how its structured)
//particular function to find useful **strings**
//var someStr = "123245467578675"
// someStr [0] -> '1' logs  if using arrays, concat will help you
//if you wanna use strings this will help 
//var g1 = "asdwhyfsht"
//var g2 = " asdadsfdghr"
//possible = g1 + g2 'asdwhyfshtasdadsfdghr'
//possible [13]


// you can use either forloop or clause or class to select all elements instead of using children