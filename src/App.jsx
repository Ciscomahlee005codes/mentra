import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import SkillPage from "./Pages/SkillPage/SkillPage"
import ProgressPage from "./Pages/ProgressPage/ProgressPage"

function App() {
  

  return (
    <div className="app">
      <Navbar />
      <Routes>
         <Route path="/" element = { <Home />} />
         <Route path="/learnSkills" element = { <SkillPage />} />
          <Route path="/trackProgress" element = { <ProgressPage />} />
      </Routes>
      
    </div>
  )
}

export default App
