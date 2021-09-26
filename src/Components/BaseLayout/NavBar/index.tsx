import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SettingsIcon from "@mui/icons-material/Settings";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";

import { toggleModal } from "../../../features/drivers/slice";
import { fetchDrivers } from "../../../features/drivers/services";

export default function NavigationBar() {
  const dispatch = useDispatch();
  const longtitude = useSelector(
    (state: RootStateOrAny) => state.root.map.longtitude
  );
  const latitude = useSelector(
    (state: RootStateOrAny) => state.root.map.latitude
  );
  const count = useSelector((state: RootStateOrAny) => state.root.map.count);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Map Task
          </Typography>
          <Button
            color="inherit"
            onClick={() =>
              dispatch(fetchDrivers([latitude, longtitude, count]))
            }
          >
            <RefreshIcon />
          </Button>
          <Button color="inherit" onClick={() => dispatch(toggleModal())}>
            <SettingsIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
