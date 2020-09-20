///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//
// The Password generator will provide a password with 8-50  characters based on criteria the user specifies.

//Assign Codes, Event Listener to prompt questions after button pushed
document.querySelector("#generate").addEventListener("click", writePassword);

// Character types for password
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var Lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var Upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Variable for prompt
var isLength = "";
var isSymbol;
var isNumber;
var isUpperCase;
var isLowerCase;

// Prompt for length of password
function generatePassword() {
  var isLength = prompt("How many characters would you like in your password?");

  // If answer is false
  while (isLength <= 7 || isLength >= 127) {
    alert("Password length must be between 8-128 characters Try again");
    var isLength = prompt(
      "How many characters would you like in your password?"
    );
  }

  // Repeat back the length of characters that the users have input
  alert(`Your password will have ${isLength} characters`);

  // Confirm the prompt that users have input
  var isSymbol = confirm(
    "Click OK to confirm if you would like to include special characters"
  );
  var isNumber = confirm(
    "Click OK to confirm if you would like to include numeric characters"
  );
  var isLowerCase = confirm(
    "Click OK to confirm if you would like to include lowercase characters"
  );
  var isUpperCase = confirm(
    "Click OK to confirm if you would like to include uppercase characters"
  );
  // Loop if answer is false
  while (
    isUpperCase === false &&
    isLowerCase === false &&
    isSymbol === false &&
    isNumber === false
  ) {
    alert("You must choose at least one type of character ");
    var isSymbol = confirm(
      "Click OK to confirm if you would like to include special characters"
    );
    var isNumber = confirm(
      "Click OK to confirm if you would like to include numeric characters"
    );
    var isLowerCase = confirm(
      "Click OK to confirm if you would like to include lowercase characters"
    );
    var isUpperCase = confirm(
      "Click OK to confirm if you would like to include uppercase characters"
    );
  }

  // variable the information from prompt
  var passwordCharacters = [];

  if (isSymbol) {
    passwordCharacters = passwordCharacters.concat(symbol);
  }

  if (isNumber) {
    passwordCharacters = passwordCharacters.concat(number);
  }

  if (isLowerCase) {
    passwordCharacters = passwordCharacters.concat(Lower);
  }

  if (isUpperCase) {
    passwordCharacters = passwordCharacters.concat(Upper);
  }

  console.log(passwordCharacters);

  // Assign random characters to variable
  var randomPassword = "";

  for (var i = 0; i < isLength; i++) {
    randomPassword =
      randomPassword +
      passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword);
  }
  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
