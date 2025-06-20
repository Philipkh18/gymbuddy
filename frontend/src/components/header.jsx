import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ThemeSwitch from "./ThemeSwitch.jsx";

// All the MUI stuff
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  Button,
  Typography,
  Box,
} from "@mui/material";

const image = [
    
]

export default function Header({toggleTheme, theme}) {
  return (
    <>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0px",
          //   padding: "16px 32px",
        }}
      >
        {/* The center */}
        <Box
          sx={{
            left: "50%",
            position: "relative",
            transform: "translateX(-50%)",
          }}
        >
          <img
            src="/GymBuddy_logo_2.png"
            alt="logo.png"
            className="w-40 h-auto"
          />
        </Box>

        {/* The rightmost  */}
        <Box
          sx={{
            width: "100px",
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "50px",
          }}
        >
          <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
        </Box>
      </Box>
    </>
  );
}
