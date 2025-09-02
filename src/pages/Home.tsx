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
    const pool = [
      'Butterfly.png',
      'Diamond Ring.png',
      'Heart.png',
      'Fire Heart.png',
      'Star.png',
      'Flower.png',
      'Card.png',
      'Dice.png',
      'Phone.png',
      'Lipstick.png',
      'Tamagotchi.png',
      'Thunder.png',
      'Glasses.png',
      'Radio.png',
      'Mouth.png',
      'Shoes.png',
      'Hair Clip.png',
      'Eye.png',
    ];
    const pick = pool[Math.floor(Math.random() * pool.length)];
    return new URL(`../assets/stickers/${pick}`, import.meta.url).href;
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
