// Assignment Code
var generateBtn = document.querySelector("#generate");
var LengthCriteria;
var uppercase;
var lowercase;
var numerical;
var special;
var genCriteria = [uppercase, lowercase, numerical, special]
var selectChars;//var GenCriteria = [LengthCriteria, uppercase, lowercase, numerical, special]
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // Create password generation algorithm
  function generatePassword(){
    //ask for password length and assign length to lengthCriteria 
    var lengthCriteria = prompt("Select Password length between 8 and 128 characters.");

    // print lengthCriteria to console 
    console.log(lengthCriteria);

    //Verify length selection is allowable and if so procede to uppercase inclusion/exclusion
    if (lengthCriteria < 8 || lengthCriteria > 128 ){
      alert("You have entered an invalid value!");
      return;
    }
    if (lengthCriteria >= 8 && lengthCriteria <= 128 ){
      var upperCase = prompt("Would you like to use upperCase letters? Please enter y for yes or n for no.");
      
      //insure input is as requested and uppercase. if so print to console and procede to lowercase inclusion/exclusion
      upperCase = upperCase.toUpperCase(); 
      if(upperCase != "N" && upperCase != "Y"){
        alert("Sorry you did not submit a valid entry!");
        return;
      }

      // Print uppercase to console
      console.log(upperCase);

      //insure input is as requested and uppercase. if so print to console and procede to numberical inclusion/exclusion
      var lowerCase = prompt("Would you like to use lowerCase letters? Please enter y for yes or n for no.");
      lowerCase = lowerCase.toUpperCase(); 
      if(lowerCase != "N" && lowerCase != "Y"){
        alert("Sorry you did not submit a valid entry!");
        return;
      }

      // Print lowercase to console      
      console.log(lowerCase);

      //Numerical inclusion?
      var numbers = prompt("Would you like to include numbers? Please enter y for yes or n for no.");
      numbers = numbers.toUpperCase(); 
      if(numbers != "N" && numbers != "Y"){
        alert("Sorry you did not submit a valid entry!");
        return;
      }

      //print number to console
      console.log(numbers);

      var specialChar = prompt("Would you like to include special characters? Please enter y for yes or n for no")
      specialChar = specialChar.toUpperCase(); 
      if(specialChar != "N" && specialChar != "Y"){
        alert("Sorry you did not submit a valid entry!");
        return;
      }

      //print specialchar to console
      console.log(specialChar);

    }
    //make all local values global
    genCriteria[0] = upperCase;
    genCriteria[1] = lowerCase;
    genCriteria[2] = numbers;
    genCriteria[3] = specialChar;
    console.log(genCriteria);
    LengthCriteria = lengthCriteria;
    uppercase = upperCase;
    lowercase = lowerCase;
    numerical = numbers;
    special = specialChar;
    //create an array to detect if no character type was selected
    var notAllowed = ["N", "N", "N", "N"];
    if (genCriteria.toString() === notAllowed.toString()){
      alert("Sorry you must select at least one character type to constitute your password.");
      return;
    }
    //if at least one char type is selected the generate selected characterset
    else if (genCriteria !== notAllowed){
      if (genCriteria[0] == "Y"){
        selectChars = "QWERTYUIOPLKJHGFDSAZXCVBNM";
      }
      if (genCriteria[1] == "Y"){
        selectChars = selectChars.concat('qwertyuioplkjhgfdsazxcvbnm');
      }
      if (genCriteria[2] == "Y"){
        selectChars = selectChars.concat("0123456789");
      }
      if (genCriteria[3] == "Y"){
        selectChars = selectChars.concat("!@#$%^&*()-_+=~/<>?");
      }
    }

    // print charset to the console for verification 
    console.log(selectChars);

    //Generate Password from selected characterset and length and store it in pw
    var pw = "";
    for (var i = 0; i < LengthCriteria; i++){
      pw = pw.concat(selectChars.charAt(Math.floor(Math.random() * selectChars.length)));
    }

    //pass pw to 
    return pw;

  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
