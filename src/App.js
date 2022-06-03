import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const getQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        console.log(res.data.content);
        setQuote(res.data.content);
        setAuthor(res.data.author);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1>
        Get inspired:{" "}
        <button style={{ borderRadius: "10px" }} onClick={getQuote}>
          Get Quote
        </button>
      </h1>

      {quote && (
        <>
          <h1 style={myStyle}>
            {quote}
            <p style={myStyle}>-{author}</p>
          </h1>
        </>
      )}
    </>
  );
}

const myStyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  borderRadius: "20px",
  fontFamily: "Sans-Serif",
};

export default App;
