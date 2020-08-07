// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  // Set arrays
  var lettersUC = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  var lettersLC = ['abcdefghijklmnopqrstuvwxyz'];
  var symbols = ["@%+/'!#$^:?,-_."];
  var numbers = ['0123456789'];

  // Set variables for function
  var characterLength = prompt('How many characters? (8-128)');
  var passwordContents = "";
  var upperCaseChoice = confirm('Would you like to include upper case letters?');
  var lowerCaseChoice = confirm('Would you like to include lower case letters?');
  var symbolsChoice = confirm("Would you like to include symbols? (@%+/'!#$^:?,-_.)");
  var numbersChoice = confirm('Would you like to include numbers?');
  var password = "";
  
  // COLLECT CRITERIA FOR PASSWORD

  // set restrictions
  if (characterLength < 8 || characterLength > 128) {
    alert("You must input a number between 8 and 128.");
    generatePassword();
  }
  
  // For each criteria:
  // Add each array to a collective passwordContents array for random character choice.
  // When asking for info, begin creating password with one item from each array to guarantee each item is used at least once.
  if (upperCaseChoice) {
    passwordContents = passwordContents.concat(lettersUC);
    password += lettersUC[0][Math.floor(Math.random() * lettersUC[0].length)];
  }
  
  if (lowerCaseChoice) {
    passwordContents = passwordContents.concat(lettersLC);
    password += lettersLC[0][Math.floor(Math.random() * lettersLC[0].length)];
  }
  
  if (symbolsChoice) {
    passwordContents = passwordContents.concat(symbols);
    password += symbols[0][Math.floor(Math.random() * symbols[0].length)];
  }
  
  if (numbersChoice) {
    passwordContents = passwordContents.concat(numbers);
    password += numbers[0][Math.floor(Math.random() * numbers[0].length)];
  }
  
  // Create the rest of the password randomly from the passwordContents array
  for (var n = password.length; n < characterLength; n++) {
    password += passwordContents[Math.floor(Math.random() * passwordContents.length)];
  }
  
  // Return password if at least one choice is made
  if (upperCaseChoice || lowerCaseChoice || symbolsChoice || numbersChoice) {
    return password;
  } else {
    alert('please choose at least one character type.')
    generatePassword();
  }
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);