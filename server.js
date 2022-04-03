const express = require('express');
const app = express();

const { quotes } = require('./modules/data');
const { getRandomElement } = require('./modules/utilities');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

const quotesRouter = express.Router()
app.use('/api/quotes', quotesRouter)

quotesRouter.get('/', (req, res, next) => {
  if (req.query.person) {
    const person = req.query.person
    const hasPerson = quotes.some(quote => quote.person === person)
    if (hasPerson) {
      const personQuotes = quotes.filter(quote => {
        return quote.person === person
      })
      res.send({
        quotes: personQuotes
      })
    } else {
      res.send({
        quotes: []
      })
    }
  } else {
    res.send({
      quotes: quotes
    })
  }
})

quotesRouter.get('/random', (req, res, next) => {
  const randomQuote = getRandomElement(quotes)
  res.send({
    quote: randomQuote
  })
})

quotesRouter.post('/', (req, res, next) => {
  const query = req.query
  if (!query) {
    res.status(404).send('Request malformed, please make sure that you include the necesary data as query parameters')
  } else if (!Object.keys(query).includes('quote') 
  || !Object.keys(query).includes('person')) {
    res.status(400).send("Request malformed, please make sure that your request has both 'quote' and 'person'.")
  } else {
    quotes.push(query)
    res.status(201).send({
      quote: query
    })
  }
})