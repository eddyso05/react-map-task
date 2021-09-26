import { useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import Fade from "@mui/material/Fade";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";

import LocationButton from "./LocationButton";
import { fetchDrivers } from "../../features/drivers/services";
import { toggleModal } from "../../features/drivers/slice";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const dispatch = useDispatch();
  const open = useSelector((state: RootStateOrAny) => state.root.map.modal);
  const longtitude = useSelector(
    (state: RootStateOrAny) => state.root.map.longtitude
  );
  const latitude = useSelector(
    (state: RootStateOrAny) => state.root.map.latitude
  );
  const count = useSelector((state: RootStateOrAny) => state.root.map.count);

  useEffect(() => {
    dispatch(fetchDrivers([latitude, longtitude, count]));
  }, []);

  const handleClose = () => {
    dispatch(toggleModal());
  };

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
          <Box>
            <LocationButton />
          </Box>
          <Button
            style={{ float: "right" }}
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
}
