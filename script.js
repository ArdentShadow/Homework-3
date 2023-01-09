// Assignment code here

//variables for defining
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/"];
var userChoices;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var password = ""

  // get user input
  var passwordLen = 0;
  do {
    passwordLen = prompt("how long is your password? Pick a number between 8-128");
  } while (passwordLen < 8 || passwordLen > 128);
  var useLower = confirm("use lower case?");
  var useUpper = confirm("Do you want uppercase?");
  var usenumbers = confirm("Do you want to use Numbers")
  var useSpecial = confirm("would you like to use special characters?");
  
  //logs the entry of above values
  console.log(passwordLen);
  console.log(useLower);
  console.log(useUpper);
  console.log(usenumbers)
  console.log (useSpecial);

  // generate an array of all the valid characters based on the input
  var validChars = [];
  if (useLower) {
    // add all the lower case characters to valid characters
    validChars = validChars.concat(lowerCase);
  }
  if (useUpper) {
    validChars = validChars.concat(upperCase);
  }
  if (usenumbers) {
    validChars = validChars.concat(numbers)
  }
  if (useSpecial) {
    validChars = validChars.concat(special);
  }



  
  // log the valid Characters
  console.log(validChars);

    // No answer
    if (!useLower && !useUpper && !usenumbers && !useSpecial) {
      userChoices = alert("You must choosean an answer");
    } else {
      // generate password
      // for every character in password length
      for (var i = 0; i < passwordLen; i++) {
        // pick a valid character
        // store in in the current character 
        var random = Math.random();
        //console.log(random);
        //console.log(validChars.length);
        //console.log(random * validChars.length);
        var validCharOffset = Math.floor(random * validChars.length);
        password = password.concat(validChars[validCharOffset]);
      }
    }
  // return password
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
