// Assignment Code
let generateBtn = document.querySelector("#generate");

// set arrays
var lettersUC = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var lettersLC = ['abcdefghijklmnopqrstuvwxyz'];
var symbols = ["@%+/'!#$^:?,-_."];
var numbers = ['0123456789'];

function generatePassword() {
  // set variables for function
  var characterLength = prompt('How many characters? (8-128)');
  var passwordContents = "";
  var password = "";

  // collect criteria for password

  if (confirm('Would you like to include upper case letters?')) {
    passwordContents = passwordContents.concat(lettersUC);
  } 
  
  if (confirm('Would you like to include lower case letters?')){
    passwordContents = passwordContents.concat(lettersLC);
  }
  
  if (confirm("Would you like to include symbols? (@%+/'!#$^:?,-_.)")) {
    passwordContents = passwordContents.concat(symbols);
  }
  
  if (confirm('Would you like to include numbers?')) {
    passwordContents = passwordContents.concat(numbers);
  }
  
  // CREATE THE PASSWORD
  for (var n=0; n<characterLength; n++) {
      password += passwordContents[Math.floor(Math.random() * passwordContents.length)];
    }
  
    return (password); 

}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);