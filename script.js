// Assignment code here

// Generate Password Function

function forceLowercase(currentCharacter) {
  if (currentCharacter === "N") {
    return 'n';
  }
  if (currentCharacter === "Y") {
    return 'y';
  }
}

function generatePassword() {

// Password Length
passwordLength = 0; 
do {
  passwordLength = window.prompt("How long should this password be? (must be between 8-128 characters)")
}
while (passwordLength < 8 | passwordLength > 128)

// Character Types

do {
  // lowercase

  passwordLower = "n";
  do {
    passwordLower = window.prompt("Include lowercase characters? y or n (must choose at least one type)")
    passwordLower = forceLowercase(passwordLower);
  }
  while (passwordLower != "n" && passwordLower != "y")
    
  // uppercase
  passwordUpper ="n"
  do {
    passwordUpper = window.prompt("Include uppercase characters? y or n (must choose at least one type)")
    passwordUpper = forceLowercase(passwordUpper);
  }
  while (passwordUpper != "n" && passwordUpper != "y")
    
  // numeric
  
  passwordNumeric ="n"
  do {
    passwordNumeric = window.prompt("Include numeric characters? y or n (must choose at least one type)")
    passwordNumeric = forceLowercase(passwordNumeric);
  }
  while (passwordNumeric != "n" && passwordNumeric != "y")
    
  // special
  
  passwordSpecial ="n"
  do {
    passwordSpecial = window.prompt("Include special characters? y or n (must choose at least one type)")
    passwordSpecial = forceLowercase(passwordSpecial);
  }
  while (passwordSpecial != "n" && passwordSpecial != "y")
    
  // Create Password

  // Build Character Selection String

  characterSelection = ""



  // Lowercase Yes

    // Uppercase Yes

      // Numeric Yes

        // Special Yes

        // Special No

      // Numeric No

        // Special Yes

        // Special No

    // Uppercase No

      // Numeric Yes

        // Special Yes

        // Special No

      // Numeric No

        // Special Yes

        // Special No

  
  // Lowercase No

    // Uppercase Yes

      // Numeric Yes

        // Special Yes

        // Special No

      // Numeric No

        // Special Yes

        // Special No

    // Uppercase No

      // Numeric Yes

        // Special Yes

        // Special No

      // Numeric No

        // Special Yes


}
while (passwordLower != "y" && passwordUpper != "y" && passwordNumeric != "y" && passwordSpecial != "y")




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
