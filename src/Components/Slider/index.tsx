import { Paper, Slider, Stack } from "@mui/material";

function valuetext(value: number) {
  return `${value}°C`;
}

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 100,
    label: "100",
  },
];

export default function VerticalSlider() {
  return (
    <Paper>
      <Stack
        sx={{
          height: "40%",
          backgroundColor: "#fff",
          padding: 2,
          borderRadius: 25,
          margin: 0,
        }}
        spacing={1}
        direction="row"
        style={{ position: "absolute", right: 30, top: "25%", zIndex: 2 }}
      >
        <Slider
          aria-label="Drivers"
          orientation="vertical"
          getAriaValueText={valuetext}
          defaultValue={30}
          marks={marks}
          style={{ margin: 0 }}
        />
      </Stack>
    </Paper>
  );
}
