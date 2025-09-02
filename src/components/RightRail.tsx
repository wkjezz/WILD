import React from "react";
import "./RightRail.css";

export default function RightRail() {
  return (
    <aside className="rightRail">
      {/* Polaroid */}
      <div className="polaroid tiltLeft">
        <div className="polaroidTape" aria-hidden />
        <img
          className="polaroidPhoto"
          src="https://i.ibb.co/Q32BXMX4/image.png"
          alt="Mr Softy Top"
        />
        <div className="polaroidCaption">Mr Softy Top</div>
      </div>

      {/* Post-it (Upcoming Event) */}
      <div className="postit tiltRight">
        <h3>UPCOMING EVENT!</h3>
        <p>Newsletter or trending feed.</p>
      </div>

      {/* Lined notes */}
      <div className="notes tiltLeftSmall">
        <h3>NOTES FOR NEXT VOLUME</h3>
        <p>Another flexible panel.</p>
        <div className="lines" aria-hidden />
      </div>
    </aside>
  );
}
