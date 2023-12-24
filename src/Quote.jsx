import React from 'react';
import './Quote.css'
const URL='https://inspo-quotes-api.herokuapp.com/quotes/random';


async function fetchQuote(){
    const response=await fetch(URL);
    const jsonResponse=await response.json();
    console.log(jsonResponse.quote)
    return jsonResponse.quote;

}

class Quote extends React.Component{
    constructor(props){
        super(props);
        this.state={
            quote:'Where there is love there is life.',
            author:'Mahatma Gandhi',
        }
        this.getQuote=this.getQuote.bind(this);
    }
    async getQuote() {
        const newQuote = await fetchQuote();
        this.setState({
            quote: newQuote.text,
            author:newQuote.author,
        });
    };
    render(){
        return(
            <>
            <div id="quote-box" className='card' >
                <h3 className='card-text' id="text">{this.state.quote}</h3>
                <p className='card-subtitle mb-2 text-body-secondary' id="author">{this.state.author.length!==0 && '-'} {this.state.author}</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className='btn btn-sm' id="new-quote" onClick={this.getQuote}>New Quote</button>
                    <a id='tweet-quote' href="twitter.com/intent/tweet" target="_blank" className='fa fa-twitter btn'></a>
                </div>
            </div>
            <h6 id='byMe'>By Cami</h6>
            </>
            
        )
    }
}
export default Quote;
