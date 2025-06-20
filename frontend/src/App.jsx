import { useState } from "react";
import ChatBox from "./components/chatbox";
import Header from "./components/header";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  Box,
} from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      <Box sx={{ m: 0, p: 0, overflow: "hidden"}}>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <ChatBox />
      </Box>
    </ThemeProvider>
  );
}

export default App;
