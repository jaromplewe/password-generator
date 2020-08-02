// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  // letters array
  var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


  // character length
  var characterLength = prompt('How many characters? (8-128)');
  console.log(characterLength);

  // upper and lower case letters?
  var caseYN = confirm('Would you like to include upper AND lower case letters?');
  if (caseYN) {
    var lettersUC = letters;
    console.log(letters);
  } else {
    for (var i = 0; i < letters.length; i++) {
      letters = letters.map(letters[i]).toLowerCase();
      console.log(letters);
    }

  }

  // symbols?
  var symbolYN = confirm("Would you like to include symbols? (@%+\/'!#$^?:,-_.)");
  console.log(symbolYN);

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
