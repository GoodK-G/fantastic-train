// Assignment code here
function generatePassword(){ 
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericChars = "0123456789";
  const specialChars = "!@#$%^&*()_-+=<>?";

  let charset = "";
  let password = "";

  // Prompt
  let passwordLength;
  while (true) {
      passwordLength = parseInt(prompt("Enter the desired password length (8 to 128 characters):"));
      if (!isNaN(passwordLength) && passwordLength >= 8 && passwordLength <= 128) {
          break;
      }
      alert("Please enter a valid password length between 8 and 128 characters.");
  }
  while (true) {
      const includeLowercase = confirm("Include lowercase characters?");
      const includeUppercase = confirm("Include uppercase characters?");
      const includeNumeric = confirm("Include numeric characters?");
      const includeSpecial = confirm("Include special characters?");

      if (includeLowercase || includeUppercase || includeNumeric || includeSpecial) {
          if (includeLowercase) charset += lowercaseChars;
          if (includeUppercase) charset += uppercaseChars;
          if (includeNumeric) charset += numericChars;
          if (includeSpecial) charset += specialChars;
          break;
      } else {
          alert("Please select at least one character type.");
      }
  }

  // Generate the password
  for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
