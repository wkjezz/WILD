import { useMemo } from 'react';
import './Home.css';
import volumes from '../data/volumes.json';

type Volume = {
  volumeNumber: number;
  imageUrl: string;     // base64 or URL
  blurb: string[];      // key articles
  date: string;         // "July–August 2025 edition"
  volumeUrl: string;    // link to read
  background?: string;  // optional bg (unused here)
};

export default function Home(){
  // pick latest by volumeNumber
  const list = (volumes as Volume[]).slice().sort((a,b)=> b.volumeNumber - a.volumeNumber);
  const current = list[0];

  // Random sticker from assets/stickers/*
  const stickerSrc = useMemo(() => {
    const stickers = [
      new URL('../assets/stickers/Butterfly.png', import.meta.url).href,
      new URL('../assets/stickers/Diamond Ring.png', import.meta.url).href,
      new URL('../assets/stickers/Heart.png', import.meta.url).href,
      new URL('../assets/stickers/Fire Heart.png', import.meta.url).href,
      new URL('../assets/stickers/Star.png', import.meta.url).href,
      new URL('../assets/stickers/Flower.png', import.meta.url).href,
      new URL('../assets/stickers/Card.png', import.meta.url).href,
      new URL('../assets/stickers/Dice.png', import.meta.url).href,
      new URL('../assets/stickers/Phone.png', import.meta.url).href,
      new URL('../assets/stickers/Lipstick.png', import.meta.url).href,
      new URL('../assets/stickers/Tamagotchi.png', import.meta.url).href,
      new URL('../assets/stickers/Thunder.png', import.meta.url).href,
      new URL('../assets/stickers/Glasses.png', import.meta.url).href,
      new URL('../assets/stickers/Radío.png', import.meta.url).href).replace('%C3%AD','i') // safety if filename seen different
    ].filter(Boolean);

    return stickers[Math.floor(Math.random() * stickers.length)];
  }, []);

  return (
    <div className="home-wrap">
      <section className="home-hero">
        <h1>Welcome to WILD!</h1>
        <p>Your Y2K+glow zine for code, culture, and ✨vibes✨.</p>
      </section>

      {current && (
        <section
          className="volumeCard volumeCard--solid"
          aria-label={`Current Volume ${current.volumeNumber}`}
        >
          <div className="volumeStack volumeStack--centered">
            <h3 className="volTitle">Current&nbsp;Volume!</h3>
            <p className="date">{current.date}</p>

            <div className="coverWrap">
              <img
                className="volumeCover"
                src={current.imageUrl}
                alt={`WILD Volume ${current.volumeNumber} cover`}
              />
              <img
                className="stickerPin"
                src={stickerSrc}
                alt=""
                aria-hidden="true"
              />
              <span className="coverGloss" aria-hidden="true"></span>
            </div>

            <ul className="blurbList">
              {current.blurb.map((item, i)=> <li key={i}>{item}</li>)}
            </ul>

            <div className="readRow">
              <a className="readBtn" href={current.volumeUrl} rel="noopener noreferrer">
                READ
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
