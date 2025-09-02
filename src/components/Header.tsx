import { useEffect, useState } from 'react';
import "./Header.css";
import { useTab } from "../state/TabContext";
import type { TabKey } from "../state/TabContext";

const TABS: TabKey[] = ["Home", "Volumes", "Events", "Partners", "Team"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { active, setActive } = useTab();

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 700 && open) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  const clickTab = (t: TabKey) => { setActive(t); setOpen(false); };

  return (
    <header className="header">
      <div className="rail headerInner">
        <h1 className="brand">WILD! MAGAZINE</h1>

        <button
          className="hamburger"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(v => !v)}
        >
          <span/><span/><span/>
        </button>

        <nav id="primary-navigation" className={`nav ${open ? "open" : ""}`} role="navigation">
          {TABS.map(t => (
            <button
              key={t}
              type="button"
              className={`tab ${active === t ? "active" : ""}`}
              onClick={() => clickTab(t)}
            >
              {t}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
