let quotesURL = "https://talaikis.com/api/quotes/random/";   

let getQuote = () => {
                    $.getJSON(quotesURL, (json) => {
                        $("#text").html(`${json.quote}`);
                        $("#author").html("- " + `${json.author}`);
                        $('#tweet-quote').attr('href', "https://twitter.com/intent/tweet?url=&text=" + `${json.quote}`
                         + ' - ' + `${json.author}`)
                        });
                    }
    getQuote();
                              
    $("#new-quote").on("click", getQuote) 
                   


