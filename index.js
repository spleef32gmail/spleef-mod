// cryptoAssist.js

const crypto = require('crypto');

function generateRandomPassword(length = 12) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

function hashString(inputString, algorithm = 'sha256') {
  const hash = crypto.createHash(algorithm);
  hash.update(inputString);
  return hash.digest('hex');
}

function encryptData(data, key) {
  const cipher = crypto.createCipher('aes-256-cbc', key);
  let encryptedData = cipher.update(data, 'utf8', 'hex');
  encryptedData += cipher.final('hex');
  return encryptedData;
}

function decryptData(encryptedData, key) {
  const decipher = crypto.createDecipher('aes-256-cbc', key);
  let decryptedData = decipher.update(encryptedData, 'hex', 'utf8');
  decryptedData += decipher.final('utf8');
  return decryptedData;
}

module.exports = {
  generateRandomPassword,
  hashString,
  encryptData,
  decryptData
};
