import {Route, Routes} from "react-router-dom";
import {CssBaseline, ThemeProvider} from '@mui/material';
import {ColorModeContext, useMode} from './theme';
import PrivateRoute from "./utils/router/privateRoute";
import LayoutComponent from "./components/layout";
import AuthRootComponent from "./components/auth";
import Home from "./components/home";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LayoutComponent>
          <div className="app">
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
              </Route>
              <Route path="login" element={<AuthRootComponent />} />
              <Route path="register" element={<AuthRootComponent />} />
            </Routes>
          </div>
        </LayoutComponent>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
