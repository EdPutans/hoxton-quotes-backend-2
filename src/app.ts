import express, { Request as ExpressRequest } from "express";
import cors from "cors";
import storedQuotes, { Reference } from "./data/quotes";

type Request = ExpressRequest<{ id: string }, any, Pick<Reference, 'quote'> & Reference['person']>;

let quotes = [...storedQuotes];

const app = express();
app.use(express.json());

app.use(cors({ origin: "*" }));
const port = 3001;

app.get("/quotes", (_, res) => {
  res.send(quotes);
});


app.get("/quotes/:id", (req, res) => {
  if (req.params.id === 'random') {
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomQuoteIndex];

    res.send(randomQuote);
  }

  const quote = quotes.find((item) => item.id.toString() === req.params.id);

  if (!quote) return res.status(404).send("Quote doesn't exist");

  return res.send(quote);
})

app.post("/quotes", (req: Request, res) => {
  const missingProperty = ['quote', 'first_name', 'last_name', 'age', 'image_url',].find(item => !req.body[item]);

  if (missingProperty)
    return res.status(400).send(`${missingProperty} is missing! Check the request body!`);

  const lastQuoteId = Math.max(...quotes.map((quote) => quote.id));

  const newId = quotes.length ? lastQuoteId + 1 : 1;

  const { quote, first_name, last_name, age, image_url } = req.body;

  const newQuote: Reference = {
    quote: quote,
    person: { first_name, last_name, age, image_url },
    id: newId,
  };

  quotes = [...quotes, newQuote];

  return res.send(quotes);
});

app.listen(port, (): void => {
  return console.log(`server is listening on the port ${port}`);
});
