const fs = require('fs');
const input = fs.readFileSync('test.txt','utf-8');
const emailRegex = /\b\S+@\S+\.\S+\b/gi;
const domainRegex = /(?<=\S+@)\S+\.\S+\b/gi;
emailMatchArray = input.match(emailRegex);
domainMatchArray = input.match(domainRegex);

var domains = {};
for (let i = 0; i < domainMatchArray.length; i++) {
    if (domainMatchArray[i] in domains) {
        domains[domainMatchArray[i]] += 1;
    } else {
        domains[domainMatchArray[i]] = 1;
    }
}

console.log(domains);