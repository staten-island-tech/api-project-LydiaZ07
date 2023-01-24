import { DOMSelectors } from "./DOM"
import "../styles/style.css";

DOMSelectors.form.addEventListener("submit", function(e) {
    e.preventDefault();
    const input1 = DOMSelectors.input1.value
    console.log(input1);
    getData(input1);
    DOMSelectors.input1.value = "";
});

function displayQuote(data){
    DOMSelectors.display.innerHTML = "";
    DOMSelectors.display.insertAdjacentHTML(
        "afterbegin", `<div class="output">
        <p>#${data.slip.id}</p>
        <p>"${data.slip.advice}"</p></div>`
    );
}    

async function getData(num){
    
    try {
        const response = await fetch(`https://api.adviceslip.com/advice/${num}`);
        if(response.status < 200 || response.status >299){
            console.log(response.status);
            throw new error(response);
        } else{
            const data = await response.json();

        console.log(data);
       displayQuote(data); 
    };
    } catch (error) {
        console.log(error);
        alert("ERROR! Please try again.");
       
    }};

