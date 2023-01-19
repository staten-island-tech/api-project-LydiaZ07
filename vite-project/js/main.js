  const URL ="https://api.adviceslip.com/advice";

    async function getData(URL) {
        try {
        const response = await fetch(URL);
        const data = await response.json();

        function displayText(){
            data.data.array.forEach((advice) => {console.log(advice)

            });
        }
        displayText(data);
        console.log(data.content);
        } catch (error) {
        };
        
    };
    getData(URL);
