var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numeric = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharacters = ['!','@','#','$','%','^','&','*','(',')'];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function userInfo() {
  var length = parseInt(prompt('Enter your desired lenght of your password.'));
    if (length < 8 || length > 128) {
      alert('You must choose lenght between 8-128.');
      return null;
    }
    if (Number.isNaN(length)) {
      alert('You must choose a number length between 8-128.');
      return null;
    }
  var confirmLower = confirm('Do you want lowercase characters in your password?');
  var confirmUpper = confirm('Do you want uppercase characters in your password?');
  var confirmNumeric = confirm('Do you want numeric characters in your password?');
  var confirmSpecial = confirm('Do you want special characters in your password?');
 
  if (confirmLower === false) {
    alert('You must choose atleast one special character.');
    return null;
  }
  // creating object to hold user input
  var userInputs = {
    length: length,
    confirmLower: confirmLower,
  }
  return userInputs;
}
function generatePassword() {
  var inputs = userInfo();
}
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
