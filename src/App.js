import React, { useState } from "react";

function App() {
    const [randomAdviceText, setRandomAdviceText] = useState("");
    const [chuckNorrisText, setChuckNorrisText] = useState("");

    const randomAdvice = () => {
        fetch("https://api.adviceslip.com/advice")
            .then((result) => result.json())
            .then((data) => {
                setRandomAdviceText(data.slip.advice);
            });
    };

    const chuckAdvice = () => {
        fetch("https://api.chucknorris.io/jokes/random")
            .then((result) => result.json())
            .then((data) => {
                setChuckNorrisText(data.value);
            });
    };

    return (
        <div className="min-h-screen bg-[oklch(50.1%_0.162_75.834)]">
            <div className="grid grid-cols-2 gap-4 p-8 font-serif">
                {/* Random Advice Section */}
                <div className="text-center">
                    <button
                        onClick={randomAdvice}
                        className="bg-[oklch(28.8%_0.119_151.328)] hover:bg-[oklch(36.8%_0.119_151.328)] text-[oklch(50.1%_0.162_75.834)] text-2xl px-40 py-5 rounded mb-lg shadow-xl cursor-pointer"
                    >
                        Generate Random advice
                    </button>
                    <h1 className="mt-10 text-2xl">{randomAdviceText}</h1>
                </div>

                {/* Chuck Norris Section */}
                <div className="text-center">
                    <button
                        onClick={chuckAdvice}
                        className="bg-[oklch(28.3%_0.11_240.79)] hover:bg-[oklch(36.3%_0.11_240.79)] text-[oklch(50.1%_0.162_75.834)] text-2xl px-40 py-5 rounded mb-4 shadow-xl cursor-pointer"
                    >
                        Generate Chuck Norris advice
                    </button>
                    <h1 className="mt-10 text-2xl">{chuckNorrisText}</h1>
                </div>
            </div>
        </div>
    );
}

export default App;
