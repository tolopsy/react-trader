import React, { useState } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

export const App: React.FC = (): JSX.Element => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("dark");
  const theme = createTheme({
    palette: {
      mode: themeMode
    },
    typography: {
      fontSize: 14
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">Dummy</div>
    </ThemeProvider>
  );
}

export default App;
