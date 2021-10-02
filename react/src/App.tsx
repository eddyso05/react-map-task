import { useEffect } from "react";
import Box from "@mui/material/Box";
import LoadingOverlay from "react-loading-overlay";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";

import Map from "./components/Map";
import NavBar from "./components/BaseLayout/NavBar";
import Slider from "./components/Slider";
import Modal from "./components/Modal";
import { fetchDrivers } from "./features/drivers/services";
import Geolocation from "./components/Geolocation";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(
    (state: RootStateOrAny) => state.root.map.loading
  );

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchDrivers(1));
    }, 120000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  return (
    <div className="App">
      <LoadingOverlay active={loading} spinner text="Loading Drivers">
        <NavBar />
        <Box>
          <Slider />
          <Map />
          <Geolocation />
          <Modal />
        </Box>
      </LoadingOverlay>
    </div>
  );
}

export default App;
