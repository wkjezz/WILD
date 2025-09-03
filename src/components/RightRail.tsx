import React from "react";

export default function RightRail(){
  return (
    <aside className="rightRail">
      {/* Dynamic A — Polaroid staff card (placeholder) */}
      <div className="rrCard">
        <h3>Staff Member</h3>
        <p>Mr Softy Top</p>
      </div>

      {/* Dynamic B — Events post-it (placeholder, no flyer bg) */}
      <div className="rrCard">
        <h3>Upcoming Event!</h3>
        <p>Event details will appear here.</p>
      </div>

      {/* Dynamic C — Lined notes (placeholder) */}
      <div className="rrCard">
        <h3>Notes for next volume</h3>
        <ul>
          <li>Teaser #1</li>
          <li>Teaser #2</li>
        </ul>
      </div>
    </aside>
  );
}
