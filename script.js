// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
let charLength = "";
function getPasswordOptions() {
  charLength = prompt("How many characters should your password contain?");
  if (charLength < 8 ||  charLength > 128){
    window.alert("Please try again, enter a value between 8 and 128");
    charLength = null;
  }
    else {
    window.confirm("Click OK to confirm use of lowercase characters the use of special characters, uppercase and lowercase characters");
    } 
  }


// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}


// Function to generate password with user input

function generatePassword() {
  getPasswordOptions();
  let passwordArray = specialCharacters.concat(lowerCasedCharacters,numericCharacters,upperCasedCharacters)
  let password = [];
  for (let i = 0; i < charLength;i++){
    password.push(getRandom(passwordArray));
  };
return password
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var passwordNew = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = passwordNew.join("");
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


