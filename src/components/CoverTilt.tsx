import { useMemo } from "react";

const STICKERS = [
  "Alien.png","Butterfly.png","Diamond Ring.png","Dice.png","Eye.png","Fire Heart.png","Flower.png",
  "Glasses.png","Hair Clip.png","Heart.png","Lipstick.png","Mouth.png","Phone.png","Plaster.png",
  "Radio.png","Shoes.png","Star.png","Tamagotchi.png","Thunder.png"
];

function pickStickerHref() {
  const name = STICKERS[Math.floor(Math.random() * STICKERS.length)];
  // use URL to keep it bundled + hashed
  return new URL(`../assets/stickers/${name}`, import.meta.url).href;
}

type Props = {
  src: string;
  alt?: string;
  className?: string;
};

export default function CoverTilt({ src, alt = "", className }: Props) {
  const stickerSrc = useMemo(() => pickStickerHref(), []);
  return (
    <div className="cv-tilt">
      <img
        className={["cv-cover", className].filter(Boolean).join(" ")}
        src={src}
        alt={alt}
        loading="eager"
        decoding="async"
      />
      <span className="cv-pin" aria-hidden="true">
        <img className="cv-sticker" src={stickerSrc} alt="" />
      </span>
    </div>
  );
}
