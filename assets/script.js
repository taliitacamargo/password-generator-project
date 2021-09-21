
// Assignment Code


var charString = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklnmopqrstuvwxyz", "0123456789", "~!@#$%^&*()-_=+"];

var userInput = [];

var password = "";

var generateBtn = document.querySelector("#generate");

var generateBtn2 = document.querySelector ("#copy");

window.onload = function() {
var elem = document.createElement("img");
document.body.style.backgroundImage = "url('/assets/images/pattern_free.jpg')";
document.getElementById("placehere").appendChild(elem);
}

// #password input
function writePassword() {
    password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// length
function generatePassword() {
    var characterLength = 0
    while ((characterLength < 8 || characterLength > 128) || Number.isInteger(characterLength) === false) {
        characterLength = parseInt(prompt("How many characters would you like your password to be? (8-128)"));
    }

    var upper = false
    var lower = false
    var number = false
    var symbol = false

    while (!upper && !lower && !number && !symbol) {

        // alerts for special characters/upper/lower case letters and numbers
        upper = confirm("Click OK to confirm uppercase characters");

        lower = confirm("Click OK to confirm lowercase characters");

        number = confirm("Click OK to confirm numeric characters");

        symbol = confirm("Click OK to confirm special characters (~!@#$%^&*()-_=+)");
    }

    // values push
    if (upper) {
        userInput.push(charString[0]);
    }

    if (lower) {
        userInput.push(charString[1])
    }

    if (number) {
        userInput.push(charString[2])
    }

    if (symbol) {
        userInput.push(charString[3])
    }

    var password = "";

    // array of characters
    userInput = userInput.join("").split("");

    for (var i = 0; i < characterLength; i++) {
       //chooses random characters
        var index = (Math.floor(Math.random() * userInput.length));
        password = password + userInput[index]
    }

    return password
}

// button click listener
generateBtn.addEventListener("click", writePassword);

//copy button
function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
}

generateBtn2.addEventListener("click", copyPassword);
