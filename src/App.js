import { useState } from "react";
import { useEffect } from "react";
import CardCaes from "./CardCaes/CardCaes";

import "./App.css";

function App() {
  const [dog, setDog] = useState([]);
  const [random, setRandom] = useState("random");

  useEffect(() => {
    fetch(`https://dog.ceo/api/breeds/image/${random}`)
      .then((res) => res.json())
      .then((res) => setDog(res.message));
  }, [random]);

  const randomCaes = () => {
    setRandom("random");
    window.location.reload("https://dog.ceo/api/breeds/image/random");
  };
  console.log(dog);
  return (
    <div className="App">
      <h1>Qual cão você seria?</h1>
      <div className="container-card">
        <CardCaes dog={dog} />
      </div>
      <button className="btn-get-caes" onClick={randomCaes}>
        random
      </button>
    </div>
  );
}

export default App;
