import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Prediction from "./pages/Prediction";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Reports from "./pages/Reports";
import SafetyHub from "./pages/SafetyHub";
import EarthquakeQuiz from "./pages/EarthquakeQuiz";
import WildfireQuiz from "./pages/WildfireQuiz";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predict" element={<Prediction />} />
        <Route path="/impact-reports" element={<Reports />} />
        <Route path="/safety-hubs" element={<SafetyHub />} />
        <Route path="/earthquake-quiz" element={<EarthquakeQuiz />} />
        <Route path="/wildfire-quiz" element={<WildfireQuiz />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
