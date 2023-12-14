const express = require("express")
const app = express()

app.listen(2023, () => {console.log("Present")})

app.get("/greeting", (req, res) => {
    res.send("<h1>Hello, Sweetie.</h1>")
})

app.get("/greeting/:name", (req, res) => {
    const name = req.params.name
    res.send(`<h1>Hello, ${name}</h1>`)
})