import { useState, useEffect } from "react";

function Lineup() {

  const [index, setIndex] = useState(0);
  const words = ["bands", "artists", "sounds"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % words.length);
    }, 1700);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div>
      <section className="lineup flex" id="lineup">
      <div className='dark-overlay'></div>
        <div className="lineup-background">
        </div>
        <div className="lineup-content">
          <img className="lineup-image" src="/images/lineup.png"></img>
          <div className="lineup-text">
          <h1>the greatest</h1>
          <h1 className="lineup-word">
          {words[index]}
          </h1>
          <h1>for the greatest festival</h1>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Lineup