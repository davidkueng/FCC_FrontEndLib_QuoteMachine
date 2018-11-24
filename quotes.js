
$(document).ready( () => { 

let quotesURL = "http://quotes.stormconsultancy.co.uk/random.json";   

let getQuote = () => {
                    $.getJSON(quotesURL, (json) => {
                        $("#text").html(JSON.stringify = `${json.quote}`);
                        $("#author").html(JSON.stringify = "- " + `${json.author}`);
                        });
                    }

let clickToTweet = () => { 
                    let quoteContent = $("#text").html(); 
                    window.open("http://twitter.com/intent/tweet?url=&text=" 
                    + quoteContent); 
                    };  


    getQuote();
        //tweet quote
        $("#tweet-quote").on("click", clickToTweet) 
       
        //show next quote                        
        $("#new-quote").on("click", getQuote) 
                      
})       




