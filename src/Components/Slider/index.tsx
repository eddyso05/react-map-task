import { Paper, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector, RootStateOrAny, batch } from "react-redux";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import "./slider.css";
import { setCount } from "../../features/drivers/slice";
import { fetchDrivers } from "../../features/drivers/services";

export default function VerticalSlider() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootStateOrAny) => state.root.map.count);
  const pickETA = useSelector(
    (state: RootStateOrAny) => state.root.map.data.pickETA
  );

  const handleChange = (value: number) => {
    batch(() => {
      dispatch(setCount(value));
      dispatch(fetchDrivers(1));
    });
  };

  return (
    <Paper>
      <Stack
        sx={{
          width: "30%",
          minWidth: 300,
          backgroundColor: "#fff",
          padding: 2,
          borderRadius: 5,
          margin: 0,
        }}
        spacing={1}
        direction="row"
        style={{
          position: "absolute",
          right: "50%",
          bottom: "15%",
          transform: "translate(50%,0)",
          zIndex: 2,
          display: "block",
          textAlign: "center",
        }}
      >
        <Typography>Number of Taxis : {count}</Typography>
        <Typography>Estimated time of arrival : {pickETA}</Typography>
        <Slider
          min={5}
          max={50}
          defaultValue={count}
          onAfterChange={(value) => handleChange(value)}
        />
      </Stack>
    </Paper>
  );
}
