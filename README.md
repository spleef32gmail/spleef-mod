# Spleef-mod

A Node.js module providing various cryptographic utilities.

## Installation

You can install this module via npm: `npm install spleef-mod`

## Usage
```javascript
const cryptoAssist = require('crypto-assist');

// Generate a random password
const password = cryptoAssist.generateRandomPassword(10);
console.log(password);

// Hash a string
const hashedString = cryptoAssist.hashString('hello world');
console.log(hashedString);

// Encrypt data
const encryptedData = cryptoAssist.encryptData('Sensitive data', 'encryptionKey');
console.log(encryptedData);

// Decrypt data
const decryptedData = cryptoAssist.decryptData(encryptedData, 'encryptionKey');
console.log(decryptedData);
```

