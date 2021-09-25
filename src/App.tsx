import React from "react";
import Box from "@mui/material/Box";

import Map from "./Components/Map";
import NavBar from "./Components/BaseLayout/NavBar";
import Slider from "./Components/Slider";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Box>
        <Slider />
        <Map />
      </Box>
    </div>
  );
}

export default App;
