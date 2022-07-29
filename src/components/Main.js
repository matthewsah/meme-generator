import "../App.css";
import React from "react";
// import memesData from "../data/memesData.tsx";

export default function Main() {
  function setMemeUrl() {
    // const memesArray = memesData["data"]["memes"];
    const memeIndex = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[memeIndex].url;
    setMemeData((prevMeme) => ({
      ...prevMeme,
      image: url,
    }));
  }

  function handleChange(event) {
    const {name, value} = event.target;
    setMemeData((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }))
  }

  const [meme, setMemeData] = React.useState({
    image: "https://i.imgflip.com/30b1gx.jpg",
    topText: "",
    bottomText: "",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  // React.useEffect(()=> {
  //   fetch("https://api.imgflip.com/get_memes")
  //     .then(res => res.json())
  //     .then(data => setAllMemes(data.data.memes)
  //     .then(a => console.log('ran')));
  // }, [])

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes)
    }
    getMemes()
  })

  return (
    <main>
      <div className="form">
        <input
          name="topText"
          type="text"
          className="form--input"
          placeholder="Top text"
          onChange={handleChange}
        />
        <input
          name="bottomText"
          type="text"
          className="form--input"
          placeholder="Bottom text"
          onChange={handleChange}
        />
        <button className="form--button" onClick={setMemeUrl}>
          Get a new meme image 🖼️
        </button>
      </div>

      <div className="meme">
        <img src={meme.image} alt="meme" className="meme--image"></img>
        <p className="meme--top-text">{meme.topText}</p>
        <p className="meme--bottom-text">{meme.bottomText}</p>
      </div>
    </main>
  );
}
