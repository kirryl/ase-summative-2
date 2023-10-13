import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataExport from "./components/data-export";
import LandingPage from "./components/landing-page";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/country-export" element={<DataExport />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
