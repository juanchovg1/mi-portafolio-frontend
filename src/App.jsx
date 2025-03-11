import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
import AboutMe from "./components/AboutMe";
import ResumeSection from "./components/ResumeSection"; // Import ResumeSection

function App() {
  return (
    <Router>
      <Header />
      <ProfileSection />
      <AboutMe />
      <ResumeSection /> {/* Include ResumeSection */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
