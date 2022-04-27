// Care about top-level domain?

// Email frequency: 
domainFreq = 150 ;

const fs = require('fs');
const input = fs.readFileSync('test.txt','utf-8');
const emailRegex = /\b\S+@\S+\.\S+\b/gi;
const domainRegex = /(?<=\S+@)\S+\.\S+\b/gi;
emailMatchArray = input.match(emailRegex);
domainMatchArray = input.match(domainRegex);

// Adds email domains to a dictionary with their respective frequencies
var domains = {};
for (let i = 0; i < domainMatchArray.length; i++) {
    if (domainMatchArray[i] in domains) {
        domains[domainMatchArray[i]] += 1;
    } else {
        domains[domainMatchArray[i]] = 1;
    }
}

domainsArray = [];

// Create domainsArray for sorting purposes
for (var key in domains) {
    domainsArray.push([key,domains[key]]);
}

domainsArray.sort((a,b) => b[1] - a[1]);

console.log("The 10 most common domains are: ");
for (let i = 0; i < 10; i++) console.log(`${domainsArray[i][0]}: ${domainsArray[i][1]} occurences`);

console.log(`\nThe domains with frequencies above ${domainFreq} are: `);
for (let i = 0; i < domainsArray.length; i++) {
    if (domainsArray[i][1] >= domainFreq) console.log(`${domainsArray[i][0]}: ${domainsArray[i][1]} occurences`);
}