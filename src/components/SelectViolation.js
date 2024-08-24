import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectViolation({ violation, setViolation }) {

  const handleChange = (event) => {
    setViolation(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 160 }}>
        <InputLabel id="demo-simple-select-helper-label">Select Violation</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={violation}
          label="select violation"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Wrong Lane Driving"}>Wrong Lane Driving</MenuItem>
          <MenuItem value={"Invalid Parking"}>Invalid Parking</MenuItem>
          <MenuItem value={"Tailgating"}>Tailgating</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}