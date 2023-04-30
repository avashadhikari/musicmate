import "./App.css";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { FaFigma, FaInfoCircle } from "react-icons/fa";
import { AiOutlineTeam, AiOutlineLink } from "react-icons/ai";
import AboutMusicMate from "./AboutMusicMate";
import AboutTeam from "./AboutTeam";
import Designs from "./Designs";
import UsefulLinks from "./UsefulLinks";

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon position tabs example"
        style={{ minWidth: "80%" }}
        centered
      >
        <Tab icon={<FaInfoCircle />} label="About MusicMate" />
        <Tab icon={<FaFigma />} label="The Designs" />
        <Tab icon={<AiOutlineTeam />} label="About the Team" />
        <Tab icon={<AiOutlineLink />} label="Useful Links" />
      </Tabs>
      <br />
      <div className="center content">{value === 0 && <AboutMusicMate />}</div>
      <div className="center content">{value === 1 && <Designs />}</div>
      <div className="center content">{value === 2 && <AboutTeam />}</div>
      <div className="center content">{value === 3 && <UsefulLinks />}</div>
    </>
  );
}

export default App;
