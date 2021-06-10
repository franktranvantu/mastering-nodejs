const mongoose = require('mongoose');

const id = new mongoose.Types.ObjectId();
const isValidId = mongoose.Types.ObjectId.isValid('1234');

console.log(id);
console.log(id.getTimestamp());
console.log(isValidId);

// 60c1b3fc6ae05323b0766e8d
// 12 bytes:
//  4 bytes: timestamp
//  3 bytes: machine identifier
//  2 bytes: process identifier
//  3 bytes: counter

// 1 byte = 8 bits
// 2^8 = 256
// 2^24 = 16M