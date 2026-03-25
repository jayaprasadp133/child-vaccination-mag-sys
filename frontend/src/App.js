import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ChildDetails from "./pages/ChildDetails";
import CheckStatus from "./pages/CheckStatus";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/child/:id" element={<ChildDetails />} />
        <Route path="/status" element={<CheckStatus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;