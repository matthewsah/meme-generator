import "../App.css";
import React from "react";
import memesData from "../data/memesData.tsx";

export default function Main() {
  function setMemeUrl() {
    const memesArray = memesData["data"]["memes"];
    const memeIndex = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[memeIndex].url;
    setMemeData((prevMeme) => ({
      ...prevMeme,
      image: url,
    }));
  }

  function handleChange(event) {
    const {name, value} = event.target;
    setMemeData((prevMeme) => ({
      ...prevMeme,
      [name] : value,
    }))
  }

  const [meme, setMemeData] = React.useState({
    image: memesData["data"]["memes"][Math.floor(Math.random() * 100)].url,
    topText: "",
    bottomText: "",
  });

  return (
    <main>
      <div className="form">
        <input
          name="topText"
          type="text"
          className="form--input"
          placeholder="Top text"
          onChange={handleChange}
        ></input>
        <input
          name="bottomText"
          type="text"
          className="form--input"
          placeholder="Bottom text"
          onChange={handleChange}
        ></input>
        <button className="form--button" onClick={setMemeUrl}>
          Get a new meme image 🖼️
        </button>
      </div>
      <img src={meme.image} alt="meme" className="meme--image"></img>
      <p>top text {meme.topText}</p>
      <p>bottom text {meme.bottomText}</p>
    </main>
  );
}
