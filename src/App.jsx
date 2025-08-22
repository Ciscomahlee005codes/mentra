import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import ProgressPage from "./Pages/ProgressPage/ProgressPage";
import Footer from "./Components/Footer/Footer";
import LogInPage from "./Pages/LogInPage/LogInPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import AllChallenges from "./Pages/Challenges/AllChallenges";
import FrontendChallenges from "./Pages/Challenges/FrontendChallenges";
import BackendChallenges from "./Pages/Challenges/BackendChallenges";
import UIChallenges from "./Pages/Challenges/UIChallenges";
import DataChallenges from "./Pages/Challenges/DataChallenges";
import AIChallenges from "./Pages/Challenges/AIChallenges";
import TeamChallenges from "./Pages/Challenges/TeamChallenges";
import FindMentorPage from "./Pages/MentorShips/FindMentorPage";
import BeMentorPage from "./Pages/MentorShips/BeMentorPage";
import Internships from "./Pages/Internships/Internships";
import Communities from "./Pages/Communities/Communities";

function App() {
  const location = useLocation();

  // Define routes where Navbar and Footer should be hidden
  const hideNavAndFooter = location.pathname === "/login"; // lowercase path

  return (
    <div className="app">
      {!hideNavAndFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutPage />} />
        <Route path="/allChallenges" element={<AllChallenges />} />
        <Route path="/frontendChallenges" element={<FrontendChallenges />} />
        <Route path="/backendChallenges" element={<BackendChallenges />} />
        <Route path="/uiChallenges" element={<UIChallenges />} />
        <Route path="/dataChallenges" element={<DataChallenges />} />
        <Route path="/aiChallenges" element={<AIChallenges />} />
        <Route path="/teamChallenges" element={<TeamChallenges />} />
        <Route path="/findMentor" element={<FindMentorPage />} />
        <Route path="/beMentor" element={<BeMentorPage />} />
        <Route path="/applyInternships" element={<Internships />} />
        <Route path="/joinCommunities" element={<Communities />} />
        <Route path="/trackProgress" element={<ProgressPage />} />
        <Route path="/login" element={<LogInPage />} /> 
      </Routes>

      {!hideNavAndFooter && <Footer />}
    </div>
  );
}

export default App;
