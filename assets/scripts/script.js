// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  // letters array
  var lettersUC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];
  var lettersLC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  // symbols array
  var symbols = ["@", "%", "+", "\", "/", "", "!", "#", "$", "^", :?", ":", "-", "_", "."];

  // character length
  var characterLength = prompt('How many characters? (8-128)');
  console.log(characterLength);

  // upper and lower case letters?
  var caseYN = confirm('Would you like to include upper AND lower case letters?');
  // return 'letters' according to answer
  if (caseYN) {
    var letters = [lettersUC + lettersLC];
    console.log(letters);
  } else {
    var letters = lettersLC;
    console.log(letters);
  }

  // symbols?
  var symbolYN = confirm("Would you like to include symbols? (@%+\/'!#$^?:,-_.)");
  console.log(symbolYN);
  // return symbols if Y
  if (symbolYN) {
    
  }

  // numbers?
  var numbersYN = confirm('Would you like to include numbers?');
  console.log(numbersYN);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
