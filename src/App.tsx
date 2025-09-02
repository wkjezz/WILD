
import Header from "./components/Header";
import RightRail from "./components/RightRail";
import Footer from "./components/Footer";
import MainPane from "./components/MainPane";
import { TabProvider } from "./state/TabContext";
import "./styles/global.css";

export default function App() {
  return (
    <TabProvider>
      <div className="layout">
        <Header />
        <div className="rail mainRow">
          <MainPane />
          <RightRail />
        </div>
        <Footer />
      </div>
    </TabProvider>
  );
}
