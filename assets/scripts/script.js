// Assignment Code
let generateBtn = document.querySelector("#generate");


function generatePassword() {
  // set arrays
  var lettersUC = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  // var UCSplit = lettersUC.split("");
  // console.log(UCSplit);
  var lettersLC = ['abcdefghijklmnopqrstuvwxyz'];
  var symbols = ["@%+/'!#$^:?,-_."];
  
  let numbers = ['0123456789'];

  // set variables for function
  var characterLength = prompt('How many characters? (8-128)');
  var passwordContents = "";
  var password = "";
  
  // collect criteria for password
  if (characterLength < 8 || characterLength > 128) {
    alert("You must input a number between 8 and 128");
    generatePassword();
  }

  if (confirm('Would you like to include upper case letters?')) {
    passwordContents = passwordContents.concat(lettersUC);
    // debugger;
    password += lettersUC[0][Math.floor(Math.random() * lettersUC[0].length)];
  }
  
  if (confirm('Would you like to include lower case letters?')) {
    passwordContents = passwordContents.concat(lettersLC);
    password += lettersLC[0][Math.floor(Math.random() * lettersLC[0].length)];
  }
  
  if (confirm("Would you like to include symbols? (@%+/'!#$^:?,-_.)")) {
    passwordContents = passwordContents.concat(symbols);
    password += symbols[0][Math.floor(Math.random() * symbols[0].length)];
  }
  
  if (confirm('Would you like to include numbers?')) {
    passwordContents = passwordContents.concat(numbers);
    password += numbers[0][Math.floor(Math.random() * numbers[0].length)];
  }
  
  // create the rest of the password
  for (var n = password.length; n < characterLength; n++) {
    password += passwordContents[Math.floor(Math.random() * passwordContents.length)];
  }
  
  return password;
  
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);