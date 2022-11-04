
function App() {

    const randoElement = document.createElement("h1");
    randoElement.async = true;

    const randomAdvice = () => fetch("http://api.adviceslip.com/advice").then(result => result.json()).then(data => { // randSelector.innerText = data.slip.advice
        let randSays = data.slip.advice
        randoElement.textContent = randSays

    })
    document.body.appendChild(randoElement);

    //CHUCK NORRIS
    const chuckNorrisElement = document.createElement("h1");
    chuckNorrisElement.async = true;

      const chuckAdvice = () => fetch("https://api.chucknorris.io/jokes/random").then(result => result.json()).then(data => {
        let chuckSays = data.value
        chuckNorrisElement.innerText = chuckSays
        // console.log(chuckSays)
    })
    document.body.appendChild(chuckNorrisElement);

    return(
        <div>
            <header className="container">
              <h1>Advice Generator</h1>
              <button onClick={randomAdvice}>Generate Random advice</button>
              <button onClick={chuckAdvice}>Generate Chuck Norris advice</button>
            </header>
        </div>

    );

}

export default App;
