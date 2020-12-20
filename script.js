// Assignment code here

// Generate Password Function

// VARIABLES

var passwordLower = "n";
var passwordUpper = "n";
var passwordNumeric = "n";
var passwordSpecial = "n";
var passwordLength = 0;
var currentType = 0;

// Strings

var passwordString = "";
var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharacters = "1234567890";
var specialCharacters = "!#$%&+/*?";
var allowedCharacters = "";

// GLOBAL FUNCTIONS

function forceLowercase(currentCharacter) {
  if (currentCharacter === "N") {
    return 'n';
  }
  if (currentCharacter === "Y") {
    return 'y';
  }
}

function addLower() {
  var randomLowerNumber = (Math.random() * lowerCharacters.length);
  var randomLowerCharacter = lowerCharacters.charAt(randomLowerNumber);
  return randomLowerCharacter;
}

function addUpper() {
  var randomUpperNumber = (Math.random() * upperCharacters.length);
  var randomUpperCharacter = upperCharacters.charAt(randomUpperNumber);
  return randomUpperCharacter;
}

function addNumeric() {
  var randomNumericNumber = (Math.random() * numericCharacters.length);
  var randomNumericCharacter = numericCharacters.charAt(randomNumericNumber);
  return randomNumericCharacter;
}

function addSpecial() {
  var randomSpecialNumber = (Math.random() * specialCharacters.length);
  var randomSpecialCharacter = specialCharacters.charAt(randomSpecialNumber);
  return randomSpecialCharacter;
}

function generateCharacter() {
  var randomAllowedNumber = (Math.random() * allowedCharacters.length);
  var randomAllowedCharacter = allowedCharacters.charAt(randomAllowedNumber);
  return randomAllowedCharacter;
  }



function generatePassword() {

  // Password Length - User inputs desired length. Test to see it meets req.

  do {
    passwordLength = window.prompt("How long should this password be? (must be between 8-128 characters)")
  }
  while (passwordLength < 8 | passwordLength > 128)

  // Character Types - User selects the required character types via y and n questions.

  do {
    // lowercase included?

    do {
      passwordLower = window.prompt("Include lowercase characters? y or n (must choose at least one type)")

      if (passwordLower === "N" || passwordLower === "Y") {
        passwordLower = forceLowercase(passwordLower);
      }

    }
    while (passwordLower != "n" && passwordLower != "y")

    // uppercase included?

    do {
      passwordUpper = window.prompt("Include uppercase characters? y or n (must choose at least one type)")

      if (passwordUpper === "N" || passwordUpper === "Y") {
        passwordUpper = forceLowercase(passwordUpper);
      }

    }
    while (passwordUpper != "n" && passwordUpper != "y")

    // numeric included?

    do {
      passwordNumeric = window.prompt("Include numeric characters? y or n (must choose at least one type)")

      if (passwordNumeric === "N" || passwordNumeric === "Y") {
        passwordNumeric = forceLowercase(passwordNumeric);
      }

    }
    while (passwordNumeric != "n" && passwordNumeric != "y")

    // special included?

    do {
      passwordSpecial = window.prompt("Include special characters? y or n (must choose at least one type)")

      if (passwordSpecial === "N" || passwordSpecial === "Y") {
        passwordSpecial = forceLowercase(passwordSpecial);
      }

    }
    while (passwordSpecial != "n" && passwordSpecial != "y")

  }
  while (passwordLower === "n" && passwordUpper === "n" && passwordNumeric === "n" && passwordSpecial === "n")

  // Apply Rules/Required Characters

  if (passwordLower === "y") {
    let newString = allowedCharacters + lowerCharacters;
    allowedCharacters = newString;
    let newString2 = passwordString + addLower();
    passwordString = newString2;
  }

  if (passwordUpper === "y") {
    let newString = allowedCharacters + upperCharacters;
    allowedCharacters = newString;
    let newString2 = passwordString + addUpper();
    passwordString = newString2;
  }

  if (passwordNumeric === "y") {
    let newString = allowedCharacters + numericCharacters;
    allowedCharacters = newString;
    let newString2 = passwordString + addNumeric();
    passwordString = newString2;
  }

  if (passwordSpecial === "y") {
    let newString = allowedCharacters + specialCharacters;
    allowedCharacters = newString;
    let newString2 = passwordString + addSpecial();
    passwordString = newString2;
  }

// Fill remaining character slots
  var remainingSlots = passwordLength - passwordString.length

  console.log(remainingSlots)

  for (var i = 0; i < remainingSlots ; i++) {
    let newString = passwordString + generateCharacter();
    passwordString = newString;
  }
  console.log(allowedCharacters);
  return passwordString;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
