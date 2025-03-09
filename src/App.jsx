import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection"; // Import ProfileSection

function App() {
  return (
    <Router>
      <Header />
      <ProfileSection /> {/* Include ProfileSection */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
