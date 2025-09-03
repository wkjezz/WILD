import React from "react";

export default function RightRail(){
  return (
    <aside className="rightRail">
      {/* Polaroid */}
      <div className="rrCard card-polaroid">
        <span className="rrTape" aria-hidden="true"></span>
        <div className="inner" aria-hidden="true"></div>
        <h3>STAFF MEMBER</h3>
        <p>Mr Softy Top</p>
      </div>

      {/* Post-it */}
      <div className="rrCard card-postit">
        <span className="rrTape" aria-hidden="true"></span>
        <h3>UPCOMING EVENT!</h3>
        <p>Event details will appear here.</p>
      </div>

      {/* Lined paper */}
      <div className="rrCard card-lined">
        <h3>NOTES FOR NEXT VOLUME</h3>
        <ul>
          <li>Teaser #1</li>
          <li>Teaser #2</li>
        </ul>
      </div>
    </aside>
  );
}
