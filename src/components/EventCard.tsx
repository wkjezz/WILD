import './EventCard.css';
import { events, type EventRec } from '../data/events';

const ONE_HOUR = 60 * 60 * 1000;

function parseStartsAt(ev: EventRec): Date | null {
  const d = new Date(ev.startsAt);
  return isNaN(d.getTime()) ? null : d;
}

function fmtInEastern(d: Date) {
  const optsDate: Intl.DateTimeFormatOptions = {
    timeZone: 'America/New_York', weekday: 'short', month: 'short', day: 'numeric'
  };
  const optsTime: Intl.DateTimeFormatOptions = {
    timeZone: 'America/New_York', hour: 'numeric', minute: '2-digit'
  };
  return {
    date: new Intl.DateTimeFormat('en-US', optsDate).format(d),
    time: new Intl.DateTimeFormat('en-US', optsTime).format(d)
  };
}

/**
 * Show the closest event to now (America/New_York):
 *  - Prefer future events (soonest upcoming).
 *  - If none future, allow events that started within the last hour.
 *  - Otherwise show the next upcoming (fallback).
 *  - DO NOT show if it's more than 1 hour past start.
 */
function pickClosest(list: EventRec[]): { ev: EventRec; start: Date } | null {
  const now = new Date();
  const withDates = list
    .map(ev => ({ ev, start: parseStartsAt(ev) }))
    .filter((x): x is { ev: EventRec; start: Date } => !!x.start);

  if (!withDates.length) return null;

  const future = withDates
    .filter(x => x.start.getTime() >= now.getTime())
    .sort((a, b) => a.start.getTime() - b.start.getTime());

  if (future.length) return future[0];

  const withinHour = withDates
    .filter(x => now.getTime() - x.start.getTime() <= ONE_HOUR)
    .sort((a, b) => b.start.getTime() - a.start.getTime());

  if (withinHour.length) return withinHour[0];

  // Past beyond 1h? show nothing.
  return null;
}

export default function EventCard() {
  const picked = pickClosest(events);
  if (!picked) {
    return (
      <div className="eventCard" aria-live="polite">
        <h3 className="eventTitle">Upcoming Event!</h3>
        <p className="eventEmpty">Nothing imminent — check back soon.</p>
      </div>
    );
  }

  const { ev, start } = picked;
  const { date, time } = fmtInEastern(start);

  const style = { '--flyer': `url(${ev.flyer})` } as unknown as React.CSSProperties;

  return (
    <div className="eventCard" style={style} aria-live="polite">
      <h3 className="eventTitle">{ev.name}</h3>
      <div className="eventMeta">
        <span className="eventDT">{date} · {time}</span>
        {ev.location && <span className="eventLoc">{ev.location}</span>}
      </div>
      {ev.description && <p className="eventDesc">{ev.description}</p>}
      {ev.contact && <p className="eventContact">{ev.contact}</p>}
    </div>
  );
}
