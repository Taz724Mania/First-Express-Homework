const express = require('express')
const app = express()
app.listen(2023, () => {
    console.log('Hello, Sweetie')
})

app.get('/greeting/:name', (req, res) => {
    const name = req.params.name
    res.send(`<h1>Hey there, ${name}!</h1>`)
})