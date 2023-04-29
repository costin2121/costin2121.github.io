const genQuote = document.getElementById("genQuote");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

fetch("https://api.breakingbadquotes.xyz/v1/quotes/").then(res => res.json()).then(data => {
    quote.innerText = `"${data[0].quote}"`;
    author.innerText = `-${data[0].author}`;
})

genQuote.addEventListener('click', () => {
    fetch("https://api.breakingbadquotes.xyz/v1/quotes/").then(res => res.json()).then(data => {
        quote.innerText = `"${data[0].quote}"`;
        author.innerText = `-${data[0].author}`;
    })
})