import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useDispatch, useSelector, RootStateOrAny, batch } from "react-redux";

import { setLocation } from "../../features/drivers/slice";
import { fetchDrivers } from "../../features/drivers/services";
import { locationSingapore, locationLondon } from "../../utils/location";

export default function RowRadioButtonsGroup() {
  const dispatch = useDispatch();
  const location = useSelector(
    (state: RootStateOrAny) => state.root.map.location
  );
  const nearestOffice = useSelector(
    (state: RootStateOrAny) => state.root.user.nearestOffice
  );

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    batch(() => {
      if (event.target.value === "Singapore") {
        dispatch(
          setLocation([
            event.target.value,
            locationSingapore.latitude,
            locationSingapore.longitude,
          ])
        );
      }
      if (event.target.value === "London") {
        dispatch(
          setLocation([
            event.target.value,
            locationLondon.latitude,
            locationLondon.longitude,
          ])
        );
      }
      dispatch(fetchDrivers(1));
    });
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
        <FormControlLabel
          value={nearestOffice}
          control={<Radio />}
          label={`Nearest Office (${nearestOffice})`}
        />
      </RadioGroup>
    </FormControl>
  );
}
