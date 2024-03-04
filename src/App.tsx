import {Route, Routes} from "react-router-dom";
import Home from "./components/home";
import LoginPage from "./components/auth/login";
import './App.css';
import PrivateRoute from "./utils/router/privateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
