import './Home.css';
import volumes from '../data/volumes.json';

type Volume = {
  volumeNumber: number;
  imageUrl: string;     // base64 ok
  blurb: string[];      // key articles
  date: string;         // "July–August 2025 edition"
  volumeUrl: string;    // link to read
  background: string;   // base64 bg (optional)
};

export default function Home(){
  // pick latest by volumeNumber
  const list = (volumes as Volume[]).slice().sort((a,b)=> b.volumeNumber - a.volumeNumber);
  const current = list[0];

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
          <div className="volumeStack">
            <h3 className="volTitle">Current Volume!</h3>
            <p className="date">{current.date}</p>

            <img
              className="volumeCover"
              src={current.imageUrl}
              alt={`WILD Volume ${current.volumeNumber} cover`}
            />

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
