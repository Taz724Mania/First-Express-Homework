const express = require('express')
const app = express()
app.listen(4000, () => {
    console.log('Hello, Sweetie')
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = req.params.total
    const tipPercentage = req.params.tipPercentage
    const tipAmount = total * (tipPercentage / 100)
    res.send(`<h1>${tipAmount}</h1>`)
    
})