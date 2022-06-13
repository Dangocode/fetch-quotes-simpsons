import axios from "axios";
import { useState } from "react";
import Quotes from "./components/Quotes";
import "./App.css";

function App() {
  const sampleQuotes = {
    quote: "Eat my shorts",
    character: "Bart Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
    characterDirection: "Right",
  };

  const [quotes, setQuotes] = useState(sampleQuotes);
  const getQuotes = async () => {
    const result = await axios.get(
      "https://simpsons-quotes-api.herokuapp.com/quotes "
    );
    setQuotes(result.data[0]);
  };
  return (
    <>
      <Quotes quotes={quotes} />
      <button type="button" onClick={getQuotes}>
        Get quote
      </button>
    </>
  );
}

export default App;
