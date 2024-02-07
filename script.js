const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authortext = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = []

function newQuote() {
    // pick a random quote

    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]

    if (!quote.author){
        authortext.textContent = "unknown"
    } else{
        let authorName = quote.author.replace(", type.fit", "")
        authortext.textContent = authorName
    }
    quoteText.textContent = quote.text
}

// get quotes

async function getQuotes() {
    const apiURL = "https://type.fit/api/quotes";
    try{
        const response = await fetch(apiURL)
        apiQuotes = await response.json();
    } catch (error) {
        // empty
    }
    
}

newQuoteBtn.addEventListener("click", newQuote);
getQuotes()