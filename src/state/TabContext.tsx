import React, { createContext, useContext, useState } from "react";

export type TabKey = "Home" | "Volumes" | "Events" | "Partners" | "Team";

type TabCtx = { active: TabKey; setActive: (t: TabKey) => void; };
const Ctx = createContext<TabCtx>({ active: "Home", setActive: () => {} });

export const TabProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [active, setActive] = useState<TabKey>("Home");
  return <Ctx.Provider value={{ active, setActive }}>{children}</Ctx.Provider>;
};

export const useTab = () => useContext(Ctx);
