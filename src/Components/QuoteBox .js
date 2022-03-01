import React from 'react';
import quotes from './quotes.json'

    //*randomQuote almacena el valor que retonar realizar un Math.radom(0-1), multiplado por la logitud de quotes y quitando los puntos flotantes con Math.floor podemos obtener todos los numeros aleatorios del JSON quotes
// 
let randomQuote = Math.floor(Math.random()*quotes.length)

// const getRandom = () => Math.floor(Math.random()* quotes.length);


const QuoteBox  = ({randomColor, index}) => {
    console.log(`randonQuote :${randomQuote}`);

    console.log(index)

    // const []

    return (
            
        <div style={{color: randomColor}} >   
            <p><i className="fa-solid fa-quote-left"></i>   {quotes[index].quote}    <i className="fa-solid fa-quote-right"></i></p>
            <h2>{quotes[index].author}</h2>
        </div>
    );
};

export default QuoteBox ;



