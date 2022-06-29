import Feed from "./Component/Feed";
import Rightbar from "./Component/Rightbar";
import Siderbar from "./Component/Siderbar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./Component/Navbar";
import Add from "./Component/Add";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={'text.primary'}>
        <Navbar />
        <Stack direction={"row"} spacing={2} justifyContent="space-between">
          <Siderbar setMode={setMode} mode={mode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
