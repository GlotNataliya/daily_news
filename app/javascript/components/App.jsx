import React from "react"
import { Routes, Route } from "react-router-dom"
import Newscasts from "../components/Newscasts"
// import Newscast from "../components/Newscast"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={< Newscasts />} />
      {/* <Route path="/newscasts/:id" element={< Newscast />} /> */}
    </Routes>
  );
}

export default App
