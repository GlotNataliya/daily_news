import React from "react"
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom"
import Newscasts from "../components/Newscasts"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/newscasts" element={< Newscasts />} />
      </Routes>
    </Router>
  );
}

export default App
