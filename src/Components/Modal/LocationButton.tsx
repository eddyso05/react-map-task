import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { setLocation } from "../../features/drivers/slice";

export default function RowRadioButtonsGroup() {
  const dispatch = useDispatch();
  const location = useSelector(
    (state: RootStateOrAny) => state.root.map.location
  );
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    dispatch(setLocation(event.target.value));
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Splyt Location</FormLabel>
      <RadioGroup
        row
        aria-label="location"
        name="row-radio-buttons-group"
        value={location}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          handleRadioChange(e)
        }
      >
        <FormControlLabel
          value="Singapore"
          control={<Radio />}
          label="Singapore"
        />
        <FormControlLabel value="London" control={<Radio />} label="London" />
      </RadioGroup>
    </FormControl>
  );
}
