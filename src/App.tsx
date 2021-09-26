import Box from "@mui/material/Box";

import Map from "./components/Map";
import NavBar from "./components/BaseLayout/NavBar";
import Slider from "./components/Slider";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Box>
        <Slider />
        <Map />
        <Modal />
      </Box>
    </div>
  );
}

export default App;
