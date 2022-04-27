var counter = 0;
const regex = /\b\w*@softwire\.com\b/gi;

const fs = require('fs');
const textFile = fs.readFileSync('test.txt', 'utf-8');

const matchesArray = textFile.match(regex);
for (let i = 0; i < matchesArray.length; i++) {
    console.log(matchesArray[i])
}
console.log(`There are ${matchesArray.length} Softwire emails.`)