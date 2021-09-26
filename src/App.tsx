import Box from "@mui/material/Box";
import LoadingOverlay from "react-loading-overlay";
import { useSelector, RootStateOrAny } from "react-redux";

import Map from "./components/Map";
import NavBar from "./components/BaseLayout/NavBar";
import Slider from "./components/Slider";
import Modal from "./components/Modal";

function App() {
  const loading = useSelector(
    (state: RootStateOrAny) => state.root.map.loading
  );

  return (
    <div className="App">
      <LoadingOverlay active={loading} spinner text="Loading Drivers">
        <NavBar />
        <Box>
          <Slider />
          <Map />
          <Modal />
        </Box>
      </LoadingOverlay>
    </div>
  );
}

export default App;
