// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables (values for)
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberValue = "0123456789";
var specialValue = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
//Variables (for functions,etc)
var pwLength;
var pwUpper;
// var pwLower; - var auto in function for pw gen
var pwNumber;
var pwSpecial;

//Functions:
//Length
//NaN for not #
function createLength() {
  pwLength = prompt("Please enter a NUMBER between 8-128 characters to determine your Password's length: ");
  if (pwLength < 8) {
    alert("Please enter a NUMBER between 8-128 characters to determine your Password's length: ");
    createLength();
  } else if (pwLength > 128) {
    alert("Please enter a NUMBER between 8-128 characters to determine your Password's length: ");
    createLength();
  } else if (isNaN(pwLength)) {
    alert("Please enter a NUMBER between 8-128 characters to determine your Password's length: ");
    createLength();
    return pwLength;
  }
}

//Uppercase
function createUpper() {
  pwUpper = prompt("Add UPPERCASE letters to your password?");
  if (pwUpper == "Yes" || pwUpper == "yes") {
    pwUpper = true;
    return pwUpper;
  } else if (pwUpper == "No" || pwUpper == "no") {
    pwUpper = false;
    return pwUpper;
  } else {
    alert("UPPERCASE letters? : Yes or No");
    createUpper();
  }
  return pwUpper;
}

// Lowercase // CREATE AUTO VARIATION
// function createLower() {
//   pwLower = prompt("Add LOWERCASE letters to your password?");
//   if (pwLower == "Yes" || pwLower == "yes") {
//     pwLower = true;
//     return pwLower;
//   } else if (pwLower == "No" || pwLower == "no") {
//     pwLower = false;
//     return pwLower;
//   } else {
//     alert("LOWERCASE letters? : Yes or No");
//     createLower();
//   }
//   return pwLower;
// }

//Numbers
function createNumbers() {
  pwNumber = prompt("Add NUMBERS to your password?");
  if (pwNumber == "Yes" || pwNumber == "yes") {
    pwNumber = true;
    return pwNumber;
  } else if (pwNumber == "No" || pwNumber == "no") {
    pwNumber = false;
    return pwNumber;
  } else {
    alert("Numbers? : Yes or No");
    createNumbers();
  }
  return pwNumber;
}

//Special
function createSpecial() {
  pwSpecial = prompt("Add SPECIAL characters to your password?");
  if (pwSpecial == "Yes" || pwSpecial == "yes") {
    pwSpecial = true;
    return pwSpecial;
  } else if (pwSpecial == "No" || pwSpecial == "no") {
    pwSpecial = false;
    return pwSpecial;
  } else {
    alert("Special Characters? : Yes or No");
    createSpecial();
  }
  return pwSpecial;
}

//Run Previous Function Info
function generatePassword() {
  createLength();
  console.log(pwLength);
  createUpper();
  console.log(pwUpper);
  createNumbers();
  console.log(pwNumber);
  createSpecial();
  console.log(pwSpecial);
  //CONDITIONS FOR RANDOM GEN
  //MATH RANDOM FOR AUTO GEN
  //CREATE VAR AUTO TO REDUCE,LOWER AS DEFAULT *** auto+=
  var auto = lowerCase;
  var password = "";
  if (pwUpper && pwNumber && pwSpecial) {
    auto += upperCase + numberValue + specialValue;
  } else if (pwUpper && pwNumber) {
    auto += upperCase + numberValue;
  } else if (pwUpper && pwSpecial) {
    auto += upperCase + specialValue;
  } else if (numberCheck && pwSpecial) {
    auto += numberValue + specialValue;
  } else if (pwUpper) {
    auto += upperCase;
  } else if (pwNumber) {
    auto += numberValue;
  } else if (pwSpecial) {
    auto += specialValue;
  } else {
    auto = lowerCase;
  }
  for (var i = 0; i < pwLength; i++) {
    password += auto.charAt(Math.floor(Math.random() * auto.length));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
