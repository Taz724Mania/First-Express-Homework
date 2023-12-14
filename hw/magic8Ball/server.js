   
    
    // const randomResponse = anyResponse
    // const anyResponse = (obj) => {
        //   const possibleResponses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
        // const totalIndices = 20
        // const randomIndex = Math.floor(Math.random() * totalIndices)
        // return randomIndex
       // }
    // res.send(`<h1>${question}</h1><h2>${randomResponse}</h2>`)
        // did not work to get a randomized index. had to restart and just focus on that particular function. Going to work around that for the rest.


const express = require('express')
const app = express()


    app.get('/magic/:question', (req, res) => {
        const question = req.params.question 
        
        if (!question) {
            res.send('No question asked!');
          }
        
        const possibleResponses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
        
        const randomIndex = Math.floor(Math.random() * possibleResponses.length);
        
        const randomResponse = possibleResponses[randomIndex];

        const questionAndResponse = {
            question: question,
            response: randomResponse
        }
        
    res.send(`<h1>${questionAndResponse.question}</h1><h2>${questionAndResponse.response}</h2>`);

})

app.listen(3000, () => {console.log('Hello, Sweetie')})