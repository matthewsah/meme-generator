import "../App.css";
// @ts-ignore;
import troll from "../images/troll.png";

export default function Header() {
  return (
    <header className="header">
      <img src={troll} alt="troll" className="header--image"></img>
      <h1 className="header--title">Meme Generator</h1>
      <div className="header--subtitle">React Course - Project 3</div>
    </header>
  );
}
