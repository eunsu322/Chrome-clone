const quotes = [
  {
    quote:
      "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "In the end, it’s not the years in your life that count. It’s the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
  {
    quote: "Keep your eyes on the stars and your feet on the ground.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "If you would be loved, love and be lovable.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "Success is going from failure to failure without a loss of enthusiasm.",
    author: "Winston Churchill",
  },
  {
    quote:
      "There is no use whatever trying to help people who do not help themselves. You cannot push anyone up a ladder unless he be willing to climb himself.",
    author: "Andrew Carnegie",
  },
  {
    quote:
      "Always bear in mind that your own resolution to succeed is more important than any other.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "Try not to become a man of success but rather try to become a man of value.",
    author: "Albert Einstein",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
