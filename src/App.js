import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const getQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        console.log(res.data.content);
        setQuote(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h2>Get a new quote by clicking the button below:</h2>
      <button onClick={getQuote}>Get Quote</button>
      {quote && <h1>{quote}</h1>}
    </>
  );
}

export default App;
