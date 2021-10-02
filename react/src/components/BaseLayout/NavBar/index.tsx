import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SettingsIcon from "@mui/icons-material/Settings";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useDispatch } from "react-redux";
import Tooltip from "@mui/material/Tooltip";
import HelpIcon from "@mui/icons-material/Help";

import { toggleModal } from "../../../features/drivers/slice";
import { fetchDrivers } from "../../../features/drivers/services";
import { toggleInfoModal } from "../../../features/user/slice";

export default function NavigationBar() {
  const dispatch = useDispatch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Map Task
          </Typography>
          <Tooltip title="Info">
            <Button color="inherit" onClick={() => dispatch(toggleInfoModal())}>
              <HelpIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Refresh">
            <Button color="inherit" onClick={() => dispatch(fetchDrivers(1))}>
              <RefreshIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Settings">
            <Button color="inherit" onClick={() => dispatch(toggleModal())}>
              <SettingsIcon />
            </Button>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
