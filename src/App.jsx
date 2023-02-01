import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";
import CityPage from "./pages/CityPage";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { setInitData } from "./utils/dataHandler";
const NotFound = () => <h1>404.. This page is not found!</h1>;

function App() {
  useEffect(() => {
    setInitData();
  }, []);

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/city" element={<CityPage />}>
            <Route path=":countryCode/:city" element={<CityPage />} />
          </Route>
          <Route path="*" element={NotFound} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
