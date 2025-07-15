import React, { useEffect, useState } from 'react';
import './App.css';

const quotes = [
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky"
  },
  {
    text: "Whether you think you can or you think you can’t, you’re right.",
    author: "Henry Ford"
  }
];

function App() {
  const [quote, setQuote] = useState({});
  
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  useEffect(() => {
    getRandomQuote(); // User Story #6 & #7
  }, []);

  return (
    <div className="App">
      <div id="quote-box">
        <p id="text">"{quote.text}"</p> {/* User Story #2 */}
        <p id="author">- {quote.author}</p> {/* User Story #3 */}
        <div className="buttons">
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet
          </a> {/* User Story #5 & #10 */}
          <button id="new-quote" onClick={getRandomQuote}>
            New Quote
          </button> {/* User Story #4, #8, #9 */}
        </div>
      </div>
    </div>
  );
}

export default App;
