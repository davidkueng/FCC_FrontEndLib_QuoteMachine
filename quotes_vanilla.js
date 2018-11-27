let quotesURL = "https://talaikis.com/api/quotes/random/";   


let getQuote = () => {
    fetch(quotesURL)
  .then((response) => {
    return response.json();
  })
  .then(function(json) {
    document.querySelector("#text").innerHTML = `${json.quote}`
    document.querySelector("#author").innerHTML = '- ' + `${json.author}`
    document.querySelector("#new-quote").onclick = getQuote
    document.querySelector("#tweet-quote").onclick = () => {
      window.open("https://twitter.com/intent/tweet?url=&text=" +
      `${json.quote}` + ' - ' + `${json.author}`)
    }
  });

}
getQuote();
