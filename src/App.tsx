import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/LandingPage";
import LogIn from "./pages/Login";
import LandingPage from "./pages/LandingPage";  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/LogIn" element={<LogIn />} />
      </Routes>
    </Router>
  );
}

export default App;
