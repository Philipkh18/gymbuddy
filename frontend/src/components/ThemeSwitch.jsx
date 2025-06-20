// Import React core functionality
import * as React from "react";

// Needed packages from MUI
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  // Set the overall sizing of the switch
  width: 90,
  height: 50,
  padding: 10,

  // Style the switch base (the clickable knob and its container)
  "& .MuiSwitch-switchBase": {
    margin: 2,
    padding: 0,
    // Initial position of the switch knob
    transform: "translateX(5px)",

    // Styles when switch is "checked" (toggled on)
    "&.Mui-checked": {
      color: "#fff",
      // Shifts the knob to the right
      transform: "translateX(36px)",

      // Set Icon inside the knob ( Sun / Moon )
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },

      // Change background track color when the switch is on
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#aab4be",
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#fb5607",
      },
    },
  },

  "& .MuiSwitch-thumb": {
    backgroundColor: "#001e3c",
    width: 44,
    height: 44,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...theme.applyStyles?.("dark", {
      backgroundColor: "#003892",
    }),
  },

  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#aab4be",
    borderRadius: 50 / 2,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
  },
}));

export default function ThemeSwitch({ toggleTheme, theme }) {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <MaterialUISwitch
            sx={{ m: 1 }}
            defaultChecked
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
        }
      />
    </FormGroup>
  );
}
