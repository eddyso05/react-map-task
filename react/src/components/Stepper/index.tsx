import { useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";

import Content from "./content";
import { fetchDrivers } from "../../features/drivers/services";
import { toggleStepper } from "../../features/drivers/slice";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 300,
  maxWidth: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

export default function TransitionsModal() {
  const dispatch = useDispatch();
  const open = useSelector(
    (state: RootStateOrAny) => state.root.map.stepperModal
  );

  useEffect(() => {
    dispatch(fetchDrivers(1));
  }, [dispatch]);

  const handleClose = () => {
    dispatch(toggleStepper());
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
            <Content />
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
