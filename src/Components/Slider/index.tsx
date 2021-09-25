import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";

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
      sx={{
        height: "40%",
        backgroundColor: "#fff",
        padding: 2,
        borderRadius: 25,
        margin: 0,
      }}
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
        style={{ margin: 0 }}
      />
    </Stack>
  );
}
