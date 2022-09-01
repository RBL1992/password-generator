// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
            // promp1 lowercase
            // promp2 uppercase
            // promp3 numeric
            // promp4 special characters

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
            // user input number 8 <= 128 characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
            // if user does not select atleast 1 character alert
            // otherwise...
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
                        // display password
