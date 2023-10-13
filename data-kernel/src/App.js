import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataExport from "./components/data-export";
import LandingPage from "./components/landing-page";
import NavBarDataKernel from "./components/nav-bar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/country-export" element={<DataExport />}></Route>
        </Routes>
        <NavBarDataKernel />
      </div>
    </BrowserRouter>
  );
}

export default App;
