import { useState, useEffect } from "react";

function Hero() {

  const [index, setIndex] = useState(0);
  const words = ["music", "shows", "memories"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % words.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div>
    <section className='hero' id="hero">
      <div className='dark-overlay'></div>
      <div className='hero-background'>
      </div>
      <div className='hero-content'>
      <div className='hero-title flex space-between'>
        <h1>
          the best
        </h1>
        <h1 className='hero-word'>
          {words[index]}
        </h1>
      </div>
      <div>
      <img src='/images/logo-no-background.png'></img>
      </div>
      <div className='hero-date flex space-between'>
        <h1>15/06/96</h1>
        <h1>Springfield</h1>
      </div>
      </div>
    </section>
    </div>
  )
}

export default Hero