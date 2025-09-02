import React from "react";
import { useTab } from "../state/TabContext";
import Home from "../pages/Home";
import Volumes from "../pages/Volumes";
import Events from "../pages/Events";
import Partners from "../pages/Partners";
import Team from "../pages/Team";

export default function MainPane() {
  const { active } = useTab();
  switch (active) {
    case "Volumes":  return <main className="pageCard"><Volumes /></main>;
    case "Events":   return <main className="pageCard"><Events /></main>;
    case "Partners": return <main className="pageCard"><Partners /></main>;
    case "Team":     return <main className="pageCard"><Team /></main>;
    default:         return <main className="pageCard"><Home /></main>;
  }
}
