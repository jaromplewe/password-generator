// Assignment Code
let generateBtn = document.querySelector("#generate");


function generatePassword() {
  // set arrays
  var lettersUC = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  var lettersLC = ['abcdefghijklmnopqrstuvwxyz'];
  var symbols = ["@%+/'!#$^:?,-_."];
  var numbers = ['0123456789'];

  // set variables for function
  var characterLength = prompt('How many characters? (8-128)');
  var passwordContents = "";
  var password = "";

  // collect criteria for password

  if (confirm('Would you like to include upper case letters?')) {
    passwordContents = passwordContents.concat(lettersUC);
  }

  if (confirm('Would you like to include lower case letters?')) {
    passwordContents = passwordContents.concat(lettersLC);
  }

  if (confirm("Would you like to include symbols? (@%+/'!#$^:?,-_.)")) {
    passwordContents = passwordContents.concat(symbols);
  }

  if (confirm('Would you like to include numbers?')) {
    passwordContents = passwordContents.concat(numbers);
  }

  // CREATE THE PASSWORD
  for (var n = 0; n < characterLength; n++) {
    password += passwordContents[Math.floor(Math.random() * passwordContents.length)];

  }
  // return (password);
  console.log(password);
  if(passIncludes(password, lettersUC)) {
    return password
  } else {
    generatePassword();
  }

  function passIncludes(arr1, arr2) {

    for(var i = 0; i < arr1.length; i++) {

      for(var j = 0; j < arr2.length; j++) {

        if(arr1[i] == arr2[j]) {
          return true;
        }
      }
    }
    // console.log('False');
    return false;
  }

}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);