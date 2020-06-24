async function fetchQuotes(numberQuotes) {
    const url = `https://thesimpsonsquoteapi.glitch.me/quotes?count=${numberQuotes}`;
    const respuestaAPI = await fetch(url); 
    const quotes = await respuestaAPI.json();

    return quotes;
}

async function renderQuotes(quotes) {
    let quoteHTML = '';

    quotes.forEach(quote => {
        quoteHTML = `<div class="card mb-3" style="max-width: 540px;">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src="${quote.image}"
                                        class="card-img" alt="...">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">${quote.character}</h5>
                                        <p class="card-text">${quote.quote}</p>
                                    </div>
                                </div>
                            </div>
                        </div>`;

        document.querySelector('.quotes').insertAdjacentHTML('beforeend', quoteHTML);
    });

}

fetchQuotes(2).then(quotes => renderQuotes(quotes));

document.search.onsubmit = async (e) => {
    e.preventDefault();
    const input = document.querySelector('#search-input');
    const value = input.value;
    console.log(value);
    const quotes = await fetchQuotes(40);
    console.log(quotes);

    quotes.forEach((quote) => {
        
        if(quote.character == value){
            
        }
        
    }
        
    )

}







