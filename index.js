const fetch = require('node-fetch');
const fs = require('fs');

const result = fetch('http://theoldreader.com/kittens/600/400/');
result
  .then(res => {
    const dest = fs.createWriteStream('cat.jpg');
    res.body.pipe(dest);
  })

