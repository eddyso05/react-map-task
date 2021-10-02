import { useEffect } from "react";
import { Button, Fade, Modal, Box, Backdrop, Typography } from "@mui/material";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";

import { setLocation, toggleInfoModal } from "../../features/user/slice";
import { style } from "./style";
import calcCrow, { nearestOffice } from "./calculation";
import { locationSingapore, locationLondon } from "../../utils/location";

const Geolocation = () => {
  const dispatch = useDispatch();
  const open = useSelector(
    (state: RootStateOrAny) => state.root.user.infoModal
  );
  const longitude = useSelector(
    (state: RootStateOrAny) => state.root.user.longitude
  );
  const latitude = useSelector(
    (state: RootStateOrAny) => state.root.user.latitude
  );
  const accuracy = useSelector(
    (state: RootStateOrAny) => state.root.user.accuracy
  );
  const nearOffice = useSelector(
    (state: RootStateOrAny) => state.root.user.nearestOffice
  );

  const success = (pos: any) => {
    var crd = pos.coords;
    const betweenSGDistance = calcCrow(
      crd.latitude,
      crd.longitude,
      locationSingapore.latitude,
      locationSingapore.longitude
    );
    const betweenLondonDistance = calcCrow(
      crd.latitude,
      crd.longitude,
      locationLondon.latitude,
      locationLondon.longitude
    );

    const nearestDistance = nearestOffice(
      betweenSGDistance,
      betweenLondonDistance
    );

    dispatch(
      setLocation([
        crd.longitude,
        crd.latitude,
        crd.accuracy,
        betweenSGDistance,
        betweenLondonDistance,
        nearestDistance,
      ])
    );
  };

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const error = (err: any) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  const handleClose = () => {
    dispatch(toggleInfoModal());
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
      console.log("Not Available");
    }
  }, [options]);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography variant="h5" style={{ marginBottom: 10 }}>
            User Location
          </Typography>
          <Typography variant="subtitle1">
            Longitude : {longitude || "No Found"}
          </Typography>
          <Typography variant="subtitle1">
            Latitude : {latitude || "No Found"}
          </Typography>
          <Typography variant="subtitle1">
            Accuracy: {accuracy || 0} meter in between
          </Typography>
          <Typography variant="subtitle1">
            Nearest Office : {nearOffice || "No Found"}
          </Typography>

          <Button
            style={{ float: "right", marginTop: 20 }}
            variant="outlined"
            color="primary"
            onClick={handleClose}
          >
            Close
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
};

export default Geolocation;
