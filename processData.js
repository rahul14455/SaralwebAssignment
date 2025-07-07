function isLetter(char) {
  const code = char.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

function isDigit(char) {
  const code = char.charCodeAt(0);
  return code >= 48 && code <= 57;
}

function isValidCode(code) {
  if (code.length !== 7) return false;

  for (let i = 0; i < 3; i++) {
    if (!isLetter(code[i])) return false;
  }

  for (let i = 3; i < 7; i++) {
    if (!isDigit(code[i])) return false;
  }

  return true;
}

function processData(data) {
  const normalizedValidCodes = [];
  let validCount = 0;

  for (let code of data) {
    if (isValidCode(code)) {
      const normalized = code.slice(0, 3).toUpperCase() + code.slice(3);
      normalizedValidCodes.push(normalized);
      validCount++;
    }
  }

  normalizedValidCodes.sort();

  const result = {
    totalCodes: data.length,
    validCodes: validCount,
    invalidCodes: data.length - validCount,
    normalizedValidCodes,
  };

  return result;
}

module.exports = { processData };
