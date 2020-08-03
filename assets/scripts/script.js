// Assignment Code
let generateBtn = document.querySelector("#generate");


function generatePassword() {
  // letters array
  let lettersUC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let lettersLC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // symbols array
  let symbols = ["@", "%", "+", "/", "", "!", "#", "$", "^", ":","?", ":", "-", "_", "."];
  // numbers array
  let numbers = [0,1,2,3,4,5,6,7,8,9];


  // character length
  let characterLength = prompt('How many characters? (8-128)');
  console.log(characterLength);

  // upper and lower case letters?
  let caseYN = confirm('Would you like to include upper AND lower case letters?');
  // return 'letters' according to answer=
  if (caseYN) {
    var passwordContents = lettersUC.concat(lettersLC);
    // console.log(letters);
  } else {
    var passwordContents = lettersLC;
    // console.log(letters);
  }
  
  // symbols?
  let symbolYN = confirm("Would you like to include symbols? (@%+/'!#$^:?,-_.)");
  // return symbols if Y
  if (symbolYN) {
    var passwordContents = passwordContents.concat(symbols);
    // console.log(symbolY);
  }
  
  
  // numbers?
  let numbersYN = confirm('Would you like to include numbers?');
  if (numbersYN) {
    var passwordContents = passwordContents.concat(numbers);
    // console.log(symbolY);
  }
  console.log(passwordContents);
  
  // CREATE THE PASSWORD
  for (n = 0; n > characterLength.length; n++);
  return characterLength[n];
}


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
