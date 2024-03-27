function validatePassword(password) {
  const isLengthValid = password.length >= 8;
  const upperCase = password
    .split("")
    .some((char) => char === char.toUpperCase());
  const lowerCase = password
    .split("")
    .some((char) => char === char.toLowerCase());
  const digit = /\d/.test(password);

    return isLengthValid && upperCase && lowerCase && digit;
}



module.exports = validatePassword;
