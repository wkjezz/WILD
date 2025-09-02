export type EventRec = {
  id: string;
  name: string;
  flyer: string;          // image URL or base64
  date: string;           // YYYY-MM-DD (display)
  time: string;           // HH:mm (display)
  startsAt: string;       // ISO 8601 with -05:00/-04:00 (America/New_York)
  location?: string;
  description?: string;
  contact?: string;
};

const PX_1x1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWP4z8DwHwAFgwJ/l3Vb0QAAAABJRU5ErkJggg==";

export const events: EventRec[] = [
  {
    id: "wild-0912",
    name: "WILD! Launch Party NYC",
    flyer: PX_1x1,
    date: "2025-09-12",
    time: "19:00",
    startsAt: "2025-09-12T19:00:00-04:00",
    location: "Brooklyn, NY",
    description: "DJ sets, zine swap, glitter face bar. 18+",
    contact: "events@wild.mag"
  },
  {
    id: "wild-1003",
    name: "Panel: Y2K UI & Culture",
    flyer: PX_1x1,
    date: "2025-10-03",
    time: "18:30",
    startsAt: "2025-10-03T18:30:00-04:00",
    location: "SoHo, NYC",
    description: "Designers on the comeback of vaporwave, skeuomorph, and glitter UI.",
    contact: "talks@wild.mag"
  },
  {
    id: "wild-0830",
    name: "Community Meetup",
    flyer: PX_1x1,
    date: "2025-08-30",
    time: "20:00",
    startsAt: "2025-08-30T20:00:00-04:00",
    location: "Online",
    description: "Low-key hangout on Discord; bring your projects.",
    contact: "discord.gg/wild"
  }
];
