import React, { useState, useCallback } from 'react';
import { Provider } from 'react-redux';
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { store } from './store';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AppBarComponent, Menu, SideBar } from './components';
import { ROUTES, MAIN, BLOTTER, TRADETICKET } from './routes';
import { Blotter, Dashboard, TradeTicket } from './features';

const App: React.FC = (): JSX.Element => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("dark");
  const [sideBarToggle, setSideBarToggle] = useState<boolean>(false);
  const navigate = useNavigate()

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
  const handleMenuLinkClick = useCallback((linkPath: string) => {
    navigate(linkPath)
    setSideBarToggle(!sideBarToggle);
  }, [navigate, sideBarToggle]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBarComponent
          handleMenuToggle={handleMenuToggle}
          onThemeChange={onThemeChange}
          isDarkMode={themeMode === "dark"}
          isSideBarOpen={sideBarToggle}
        />
        <SideBar
          isOpen={sideBarToggle}
          handleSidebarToggle={handleMenuToggle}
          children={<Menu links={ROUTES} handleMenuLinkClick={handleMenuLinkClick} />}
        />
        <Routes>
          <Route path={MAIN} element={<Dashboard/>}/>
          <Route path={BLOTTER} element={<Blotter/>}/>
          <Route path={TRADETICKET} element={<TradeTicket/>}/>
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
