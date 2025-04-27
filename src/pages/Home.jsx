import { useState } from "react";

const Home = () => {
  const [longURL, setLongURL] = useState("");
  const [customURL, setCustomURL] = useState("");
  const [resultURL, setResultURL] = useState(null);

  function getRandomLetter() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // all letters
    const randomIndex = Math.floor(Math.random() * letters.length); // generate random index
    return letters[randomIndex]; // return the letter at that index
  }
  function handleShorten() {
    const baseURL = "https://cpit405.co/";
    if (customURL && customURL.length > 0) {
      setResultURL(baseURL + customURL);
    } else {
      const id =
        getRandomLetter() +
        getRandomLetter() +
        getRandomLetter() +
        getRandomLetter() +
        getRandomLetter(); // random 5 letters
      setResultURL(baseURL + id);
    }
  }

  return (
    <div className="container">
      <h1>URL Shrinker</h1>
      <div className="form-group">
        <label htmlFor="longURL">Long URL</label>
        <input
          type="text"
          id="longURL"
          value={longURL}
          onChange={(e) => setLongURL(e.target.value)}
        />
        <label htmlFor="shortCode"> Custom Short Code</label>
        <input
          type="text"
          id="shortCode"
          value={customURL}
          onChange={(e) => setCustomURL(e.target.value)}
        />
        <button className="btn" onClick={handleShorten}>
          Shorten
        </button>

        {resultURL && (
          <div>
            <label htmlFor="shortURL"> Short URL</label>
            <input type="text" id="shortURL" value={resultURL} readOnly />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
