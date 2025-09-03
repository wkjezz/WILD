import eventsData from "../data/events.json";

export type EventItem = {
  id: string;
  name: string;
  flyer?: string;
  startsAt: string;       // ISO with offset
  endsAt?: string;        // ISO with offset
  location?: string;
  description?: string;
  contact?: string;       // telephone number string
};

const ONE_HOUR = 60 * 60 * 1000;

function parseISO(v?: string): number | null {
  if (!v) return null;
  const t = new Date(v).getTime();
  return isNaN(t) ? null : t;
}

/**
 * Pick the next event:
 * - include events starting in the future OR within the last hour
 * - sort by start ascending and take the first
 */
export function pickNextEvent(now: Date = new Date()): EventItem | null {
  const nowMs = now.getTime();
  const list = (eventsData as EventItem[])
    .map((e) => ({ e, start: parseISO(e.startsAt) }))
    .filter((x): x is { e: EventItem; start: number } => x.start !== null)
    .filter((x) => x.start >= nowMs - ONE_HOUR)
    .sort((a, b) => a.start - b.start);
  return list.length ? list[0].e : null;
}
