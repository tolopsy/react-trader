import React, { useState, useCallback } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { AppBarComponent, SideBar } from './components';

const App: React.FC = (): JSX.Element => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("dark");
  const [sideBarToggle, setSideBarToggle] = useState<boolean>(false);

  const theme = createTheme({
    direction: "ltr",
    palette: {
      mode: themeMode
    },
    typography: {
      fontSize: 14
    }
  });

  const handleMenuToggle = useCallback(() => {
    setSideBarToggle(!sideBarToggle);
  }, [sideBarToggle]);
  const onThemeChange = useCallback(() => {
    setThemeMode(themeMode === "dark" ? "light": "dark");
  }, [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBarComponent
        handleMenuToggle={handleMenuToggle}
        onThemeChange={onThemeChange}
        isDarkMode={themeMode === "dark"}
        isSideBarOpen={sideBarToggle}
      />
      <SideBar isOpen={sideBarToggle} handleSidebarToggle={handleMenuToggle}>
      </SideBar>
    </ThemeProvider>
  );
}

export default App;
