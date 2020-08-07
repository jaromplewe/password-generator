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
  
  // create the password
  for (var n = 0; n < characterLength; n++) {
    password += passwordContents[Math.floor(Math.random() * passwordContents.length)];
  }

  // ensure all criteria are met
  function passIncludesAll(arr1, arr2) {
  
    for(var i = 0; i < arr1.length; i++) {
      
      for(var j = 0; j < arr2.length; j++) {

        if(arr1[i].includes(arr2[j])) {
          console.log("True");
          return true;
        }
      }
    }
    // console.log('False');
    console.log("False");
    return false;
  }

  // finally, DISPLAY the password
  console.log(password);
  if(passIncludesAll(password.split(""), numbers)) {
    return password
  } else {
    return "doesn't contain all criteria";
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