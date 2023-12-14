const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>99 Bottles of beer on the wall</h1><h2><a href="/98">Take one down, pass it around</a></h2>')
})

app.get('/:number_of_bottles', (req, res) => {
    const bottles = req.params.number_of_bottles;
    
    res.send(`<h1>${bottles} Bottles of beer on the wall</h1>`);
  
    if (bottles > 0) {
      res.send(`<a href="/${Number(bottles) - 1}">Take one down, pass it around</a>`);
    } else {
      res.send(`<a href="/">Start over</a>`);
    }
  });



app.listen(3000, () => {console.log('Bad Wolf')})