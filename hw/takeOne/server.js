const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('<h1>99 Bottles of beer on the wall</h1><h2><a href="/98">Take one down, pass it around</a></h2>')
})

app.get('/:numberOfBottles', (req, res) => {
    
    const totalBottles = req.params.numberOfBottles

    if (totalBottles > 0) {
        res.send(`<h1>${totalBottles} Bottles of beer on the wall</h1> <h2><a href="/${(totalBottles) - 1}">Take one down, pass it around</a></h2>`)
    } else {
        res.send(`<h1> 0 Bottles of beer on the wall</h1> <h2><a href="/">Start Over</a></h2>`)
    }

})




// app.get('/:number_of_bottles', (req, res) => {
//     const bottles = req.params.number_of_bottles
    
//     res.send(`<h1>${bottles} Bottles of beer on the wall</h1>`)
  
//     if (bottles > 0) {
//       res.send(`<h2><a href="/${Number(bottles) - 1}">Take one down, pass it around</a></h2>`)
//     } else {
//       res.send(`<a href="/">Start over</a>`)
//     }
//   }); not generating the hyperlink for the numbers passed 98, BUT WHY?

// looking at the first code i tried, i see that the h1 and h2 had to be in the res.send together and that i didn't need Number, because that bit wasn't necessarily dependent on user input



app.listen(3000, () => {console.log('Bad Wolf')})