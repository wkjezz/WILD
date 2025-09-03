import "./RightRail.css";
import { POLAROID_IMG } from "../assets/polaroid-img";
import { pickNextEvent, type EventItem } from "./EventCard";

function formatEasternRange(e: EventItem) {
  const start = new Date(e.startsAt);
  if (isNaN(start.getTime())) return "";

  const dateFmt: Intl.DateTimeFormatOptions = {
    timeZone: "America/New_York",
    weekday: "short",
    month: "short",
    day: "numeric",
  };
  const timeFmtWithTz: Intl.DateTimeFormatOptions = {
    timeZone: "America/New_York",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  };
  const timeFmt: Intl.DateTimeFormatOptions = {
    timeZone: "America/New_York",
    hour: "numeric",
    minute: "2-digit",
  };

  const datePart = new Intl.DateTimeFormat("en-US", dateFmt).format(start);
  const startPart = new Intl.DateTimeFormat("en-US", timeFmtWithTz).format(start);

  if (e.endsAt) {
    const end = new Date(e.endsAt);
    if (!isNaN(end.getTime())) {
      const endPart = new Intl.DateTimeFormat("en-US", timeFmt).format(end);
      const tz = startPart.match(/[A-Z]{2,4}$/)?.[0] ?? "";
      return `${datePart} · ${startPart.replace(/\s*[A-Z]{2,4}$/, "")}–${endPart} ${tz}`.trim();
    }
  }
  return `${datePart} · ${startPart}`;
}

export default function RightRail() {
  const evt = pickNextEvent();

  return (
    <aside className="rightRail">
      {/* Polaroid */}
      <div className="polaroid tiltLeft">
        <div className="polaroidTape" aria-hidden />
        <img className="polaroidPhoto" src={POLAROID_IMG} alt="Mr Softy Top" />
        <div className="polaroidCaption">Mr Softy Top</div>
      </div>

      {/* Post-it */}
      <div className="postit tiltRight">
        {evt ? (
          <>
            <h3>{evt.name}</h3>
            {/* Vertically-centered body */}
            <div className="postit-body">
              <p>
                {formatEasternRange(evt)}
                {evt.location ? <><br />{evt.location}</> : null}
                {evt.description ? <><br />{evt.description}</> : null}
                {evt.contact ? (
                  <>
                    <br />
                    Contact: <span className="evtPhone">{evt.contact}</span>
                  </>
                ) : null}
              </p>
            </div>
          </>
        ) : (
          <>
            <h3>Got an Event?</h3>
            <div className="postit-body">
              <p>
                Contact a member of wild staff at <span className="evtPhone">(505) 505-5555</span> to get it on our calendar
              </p>
            </div>
          </>
        )}
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
