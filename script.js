// Assignment code here

// Generate 

function generatePassword() {

// Password Length

// Character Types

// lowercase

// uppercase

// numeric

// special

// Create Password


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
