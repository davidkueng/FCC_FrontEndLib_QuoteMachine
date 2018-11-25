let quotesURL = "https://talaikis.com/api/quotes/random/";   

let getQuote = () => {
    fetch(quotesURL)
  .then((response) => {
    return response.json();
  })
  .then(function(json) {
    console.log(JSON.stringify(json));
    document.querySelector("#text").innerHTML = `${json.quote}`
    document.querySelector("#author").innerHTML = '- ' + `${json.author}`
    document.querySelector("#new-quote").onclick = getQuote
  });

}
getQuote();