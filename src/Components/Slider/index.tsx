import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

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
    <Stack
      sx={{ height: "40%" }}
      spacing={1}
      direction="row"
      style={{ position: "absolute", right: 10, top: "25%", zIndex: 2 }}
    >
      <Slider
        aria-label="Drivers"
        orientation="vertical"
        getAriaValueText={valuetext}
        defaultValue={30}
        marks={marks}
      />
      {/* <Slider
        getAriaLabel={() => "Temperature"}
        orientation="vertical"
        getAriaValueText={valuetext}
        defaultValue={[20, 37]}
        marks={marks}
      /> */}
    </Stack>
  );
}
