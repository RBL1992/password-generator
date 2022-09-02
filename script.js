var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

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
  var length = parseInt(prompt('Enter your desired length of your password between 8 - 128 characters.'));
  if (length < 8 || length > 128) {
    alert('You must choose length between 8-128.');
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

  if (confirmLower === false && confirmUpper === false && confirmNumeric === false && confirmSpecial === false) {
    alert('You must choose atleast one unique character.');
    return null;
  }
  // creating object to hold user input
  var userInputs = {
    length: length,
    confirmLower: confirmLower,
    confirmUpper: confirmUpper,
    confirmNumeric: confirmNumeric,
    confirmSpecial: confirmSpecial,
  }
  return userInputs;
}

function convertLowerCaseArrayToUpperCase(arr) {
  var upperCaseValues = [];
  arr.forEach(element => {
    upperCaseValues.push(element.toUpperCase());
  });
  return upperCaseValues;
}
function basenumbers(size) {
  var result = []
  for (var i = 0; i < size; i++) {
    result.push(i);
  }
  return result;
}
function generatePassword() {
  var availableCharacters = [];
  var completedPassword = [];
  var userInputs = userInfo();

  if (userInputs != null) {
    if (userInputs.confirmLower === true) {
      availableCharacters = availableCharacters.concat(lowerCase)
    }
    if (userInputs.confirmUpper === true) {
      var upperCase = convertLowerCaseArrayToUpperCase(lowerCase);
      availableCharacters = availableCharacters.concat(upperCase);
    }
    if (userInputs.confirmNumeric === true) {
      var numeric = basenumbers(10);
      availableCharacters = availableCharacters.concat(numeric)
    }
    if (userInputs.confirmSpecial === true) {
      availableCharacters = availableCharacters.concat(specialCharacters)
    }
    for (var i = 0; i < userInputs.length; i++) {
      var randomIndex = Math.floor(Math.random() * availableCharacters.length);
      completedPassword.push(availableCharacters[randomIndex]);
    }
    var result = '';
    completedPassword.forEach(character => result += character)
    return result;
  } else {
    generatePassword();
  }
}