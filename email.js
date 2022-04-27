var counter = 0;

const fs = require('fs');
fs.readFile('test.txt', 'utf-8', (err,data) => {
    if (err) {
        console.error(err);
        return;
    }
    for (let i = 0; i < data.length; i++) {
        if ((data.substring(i,i+14) === '@softwire.com ')) {
            counter += 1;
            j = data.lastIndexOf(" ", i);
            console.log(data.substring(j+1,i+13));
        }
    }
    console.log(`There are ${counter} Softwire emails.`);
});