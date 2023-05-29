import { DOMSelectors } from "./DOM"
import "../styles/style.css";


function displayY(){


    function getRandomIntInclusive() {
        const min = Math.ceil(0);
        const max = Math.floor(244);
        return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
      }
      const numbeR = getRandomIntInclusive();
      getData(numbeR);
      console.log(numbeR);

}
displayY();

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

