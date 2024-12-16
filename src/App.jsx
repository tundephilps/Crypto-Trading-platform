import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../src/Pages/Dashbaord";
import Navbar from "./components/Navbar";
import PriceTicker from "./components/PriceTicker";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <PriceTicker />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
