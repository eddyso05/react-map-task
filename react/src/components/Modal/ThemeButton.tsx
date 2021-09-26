import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";

import { setTheme } from "../../features/drivers/slice";

export default function ThemeButton() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootStateOrAny) => state.root.map.theme);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    dispatch(setTheme(event.target.value));
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Map Theme</FormLabel>
      <RadioGroup
        row
        aria-label="location"
        value={theme}
        name="row-radio-buttons-group"
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          handleRadioChange(e)
        }
      >
        <FormControlLabel
          value="streets-v11"
          control={<Radio />}
          label="Street"
        />
        <FormControlLabel value="light-v10" control={<Radio />} label="Light" />
        <FormControlLabel value="dark-v10" control={<Radio />} label="Dark" />
        <FormControlLabel
          value="outdoors-v11"
          control={<Radio />}
          label="Outdoors"
        />
      </RadioGroup>
    </FormControl>
  );
}
