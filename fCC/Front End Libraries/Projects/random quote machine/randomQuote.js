document.addEventListener("DOMContentLoaded", (event) => {
  console.log(`Hello World!`);

  const newQuote_button = document.getElementById("new-quote");
  const text_p = document.getElementById("text");
  const author_p = document.getElementById("author");
  const tweetQuote_a = document.getElementById("tweet-quote");

  const quotes = [
    [
      "0The biggest challenge of any cinematographer is making the imagery fit together of a piece: that the whole film has a unity to it, and actually, that a shot doesn't stand out.",
      "0Roger Deakins",
    ],
    [
      "1I would travel down to Hell and wrestle a film away from the Devil if it was necessary",
      "1Werner Herzog",
    ],
    [
      "2When people ask me if I went to film school, I tell them, 'No, I went to films'",
      "2Quentin Tarantino",
    ],
    [
      "3We don't make movies to make more money, We make money to make more movies",
      "3Walt Disney",
    ],
    [
      "4The Most Honest form of filimmaking is to make a film for yourself",
      "4Peter Jackson",
    ],
    [
      "5Filmmaking can give you everything, but at the same time, it can take everything from you",
      "5Alejandro Gonzalez Inarritu",
    ],
  ];

  //generates a random number assigned to a quote.
  function GetRandomNumber(numberOfQuotes) {
    const randomQuoteNumber = Math.floor(Math.random() * numberOfQuotes);
    return randomQuoteNumber;
  }

  //pulls the quote matching the number and displays it with quotes and author.
  function GetRandomQuote(quotesArray) {
    const quoteNumber = GetRandomNumber(quotesArray.length);
    // console.log(quotesArray);
    // console.log(quoteNumber);
    console.log(
      `"${quotesArray[quoteNumber][0]}." \n  -- ${quotesArray[quoteNumber][1]}`
    );

    text_p.innerHTML = `"${quotesArray[quoteNumber][0]}."`;
    author_p.innerHTML = `  -- ${quotesArray[quoteNumber][1]}`;
    tweetQuote_a.setAttribute(
      "href",
      `https://twitter.com/intent/tweet?text=%22${quotesArray[quoteNumber][0]}.%22%20%20--%20${quotesArray[quoteNumber][1]}`
    );
  }
  GetRandomQuote(quotes);
});
