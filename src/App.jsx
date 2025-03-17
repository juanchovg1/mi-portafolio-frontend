import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
import AboutMe from "./components/AboutMe";
import ResumeSection from "./components/ResumeSection";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <Router>
      <Header />
      <ProfileSection />
      <AboutMe />
      <ResumeSection />
      <ServicesSection />
      <SkillsSection />
      <ProjectsSection />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
