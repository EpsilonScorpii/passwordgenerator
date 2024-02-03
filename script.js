const passwordLength = document.getElementById("passwordLength");
const password = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");
const savePassword = document.getElementById("savePassword");

function generatePassword(len) {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numerical = "0123456789";
  const symbol = "~`!@#$%^&*()_-+={}[];':,./<>?";
  const data = lowerAlphabet + upperAlphabet + numerical + symbol;

  let generator = "";
  for (let i = 0; i < len; i++) {
    generator += data[Math.floor(Math.random() * data.length)];
  }
  return generator;
}

function getPassword() {
  const hasilPassword = generatePassword(passwordLength.value);
  password.value = hasilPassword;

  if (passwordLength.value === "") passwordLength.classList.add("is-invalid");
}
