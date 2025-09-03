import "./RightRail.css";
import { POLAROID_IMG } from "../assets/polaroid-img";
import eventsData from "../data/events.json";

type EventItem = {
  id: string;
  name: string;
  flyer?: string;
  startsAt: string; // ISO
  endsAt?: string;  // ISO (unused for display)
  location?: string;
  description?: string;
  contact?: string; // telephone as plain string "(332) 555-0142"
};

function toEST(d: Date) {
  return new Date(d.toLocaleString("en-US", { timeZone: "America/New_York" }));
}
function parseEST(iso: string) {
  return toEST(new Date(iso));
}
function pickNextEvent(now = new Date()): EventItem | null {
  const estNow = toEST(now);
  const list = (eventsData as EventItem[])
    .filter((e) => parseEST(e.startsAt).getTime() >= estNow.getTime() - 60 * 60 * 1000)
    .sort(
      (a, b) =>
        parseEST(a.startsAt).getTime() - parseEST(b.startsAt).getTime()
    );
  return list.length ? list[0] : null;
}

/** Sat, Sep 20 · 7:00 PM EST */
function formatEventWhen(iso: string) {
  const dt = parseEST(iso);
  const datePart = dt.toLocaleDateString("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  const timePart = dt.toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
    hour: "numeric",
    minute: "2-digit",
  });
  return `${datePart} · ${timePart} EST`;
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

      {/* Post-it / Upcoming Event */}
      <div className="postit tiltRight">
        <h3>{evt ? evt.name : "GOT AN EVENT?"}</h3>

        <div className="postitBody">
          {evt ? (
            <>
              <div className="evtLine">{formatEventWhen(evt.startsAt)}</div>
              {evt.location && <div className="evtLine">{evt.location}</div>}

              {evt.description && (
                <p className="evtDesc">{evt.description}</p>
              )}

              {evt.contact && (
                <div className="evtLine">Call: {evt.contact}</div>
              )}
            </>
          ) : (
            <>
              <div className="evtLine">
                Contact a member of WILD staff to get it on our calendar
              </div>
              <div className="evtLine">Call: (505) 505-5555</div>
            </>
          )}
        </div>
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
