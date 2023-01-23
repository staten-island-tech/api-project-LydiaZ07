import { DOMSelectors } from "./DOM"
import "../styles/style.css";



const URL = "https://api.goprogram.ai/inspiration";


async function getData(URL){
    try {
        const response = await fetch(URL)
        if(response.status < 200 || response.status >299){
            console.log(response.status);
            throw new error(response);
        } else{
            const data = await response.json();
            const results = data.results;

            function displayQuote(){
                data.data.forEach((quote) => {
                    document.insertAdjacentHTML(
                        "afterbegin", `<div class="hello" id=""${quote.quote}></div>`
                    );
                });
        }    displayQuote();
    }
    ;
    } catch (error) {
        console.log(error);
        alert("ERROR! Please try again.");
       
    }};
getData(URL)

DOMSelectors.getData.addEventListener("click", getData);

DOMSelectors.btn.addEventListener("click", function(){
    getData(URL);
});

document.addEventListener("DOMContentLoaded", function(){
    getData(URL);
});

