import React from 'react';
import QuoteBox from './QuoteBox ';
import { useState } from 'react';
import quotes from './quotes.json'


const getRandom = () => Math.floor(Math.random()* quotes.length);



const BtnChange = () => {

    const colors=["#35670F", "#6E3C0E", "#670F1A"," #008884", "#DD0D0D", "#DD7E0D"];
    // const [color, SetColor]= useState(Math.floor(Math.random()*colors.length));
    let randomColor = colors[Math.floor(Math.random()*colors.length)];

    // const[quote,setQuote]= useState(randomQuote);
    const[quote, setQuote] =useState(getRandom());

    const changeColor=()=>{
        setQuote(getRandom())
        // console.log(quotes[getRandom()]);
    
    }




    document.body.style = `background :${randomColor};`  



    return (
        <div  className='box-quote' >
        <QuoteBox randomColor={randomColor} index={quote} />
        <button style={{background:randomColor }} onClick={changeColor} className='btn'> <i className="fa-solid fa-angle-right"></i></button>
        </div>
    );
};

export default BtnChange;