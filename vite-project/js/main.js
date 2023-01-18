  const URL ="https://api.adviceslip.com/advice";

    async function getData(URL){
        try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data.content);
        } catch (error) {
            console.log(error);
        }
        
    }
    getData(URL);